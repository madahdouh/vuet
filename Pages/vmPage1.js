var textInput = {
    props: {
        detail: {required: true},
    },
    template: `
     <v-col cols="6">
        <v-text-field
                v-model=detail.name
                :rules=detail.nameRules
                :label=detail.label
        ></v-text-field>
    </v-col>
  `
};
var vTable = {
    props: {
        dat: {required: true},
    },

    template: `
  
  `
};
var search = {
    props: {
        dat: {required: true},
    },
    components: {
        textInput: textInput
    },
    methods: {
        validate() {

            if (this.$refs.form.validate()) {
                this.$emit('dochange')
            }

        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
    template: `
    <v-form ref="form"
 v-model="dat.valid"
lazy-validation  >
 <v-row justify="center">
   <template v-for="field in dat.fields">
      <component :is="field.type" :detail="field.detail"   v-model:detail="field.detail" ></component>
    </template>
   
    </v-row>
    <v-row>
            <v-btn
                :disabled="!dat.valid"
                color="success"
                class="mr-4"
                @click="validate"
        >
            Validate
        </v-btn>

        <v-btn
                color="error"
                class="mr-4"
                @click="reset"
        >
            Reset Form
        </v-btn>

        <v-btn color="warning"
                @click="resetValidation"
        >
            Reset Validation
        </v-btn>
</v-row>
     </v-form>
  `
};

var vmPage1 = {
    props: {
        menuselected: {required: true},
    },
    data: function () {
        return {
            sections: [
                {
                    name: "search",
                    dat: {
                        fields: [
                            {
                                type: "text-input",
                                detail: {
                                    name: '',
                                    label: "444",
                                    required: true,
                                    nameRules: [
                                        v => !!v || 'Name is required',
                                        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                                    ],
                                }
                            },
                            {
                                type: "text-input",
                                detail: {
                                    name: '',
                                    label: "555",
                                    required: true,
                                    nameRules: [],
                                }
                            },

                            {
                                type: "text-input",
                                detail: {
                                    label: "sdsd",
                                    name: '',
                                    required: false,
                                    nameRules: [
                                        v => !!v || 'Name is required',
                                        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                                    ],
                                }
                            }
                        ],
                        valid: true,
                        // name: '',
                        // nameRules: [
                        //     v => !!v || 'Name is required',
                        //     v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                        // ],
                        // email: '',
                        // emailRules: [
                        //     v => !!v || 'E-mail is required',
                        //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                        // ],
                        // select: null,
                        // items: [
                        //     'Item 1',
                        //     'Item 2',
                        //     'Item 3',
                        //     'Item 4',
                        // ],
                        // checkbox: false,
                    }
                },
                {
                    name: "v-table",
                    dat: {}
                }
            ],
        }
    }
    ,
    components: {
        search: search,
        vTable: vTable
    },
    template: `
<div>
<v-row>
<h3> {{menuselected.title}}</h3>
</v-row>
 <v-row>
   <template v-for="section in sections">
      <component :is="section.name" :dat="section.dat" v-model:dat="section.dat" ></component>
    </template>
    </v-row>
</div>
  `
    ,
};
