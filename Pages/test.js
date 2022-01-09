
const vmpTest = {

    components: {
        vmSection: vmSection,
    },
    data:
        {
            drawer: null,
            pageTitle: "test",
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


        },
    methods: {
        dochange(a) {
            alert(111);
        },
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
    watch: {
        sections:  {
            handler(newVal, oldVal) {
                console.log(newVal)
            },
            deep: true,
        }
    }
};
Vue.component('vm-section', vmSection);