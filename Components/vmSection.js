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
var vmSection = {
    props: {
        sections: {required: true},
    },
    components: {
        search: search,
        vTable: vTable
    },
    methods: {
        dochange(a) {
            this.$emit('dochange')
        },
    },
    template: `
  <v-row>
   <template v-for="section in sections">
      <component :is="section.name" :dat="section.dat" v-model:dat="section.dat" @dochange="dochange"></component>
    </template>
    </v-row>
  `
    ,
};
