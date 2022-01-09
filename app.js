// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
//
// const routes = [
//     { path: '/testpage.html', component: Foo },
//     { path: '/bar', component: Bar }
// ]
//
// const router = new VueRouter({
//     routes // short for `routes: routes`
// })


var mainVApp = new Vue({
    // router,
    el: '#app',
    vuetify: new Vuetify(),
    data:
        {
            pageContent: null,
            pageTitle: "test page",
            user: {
                name: "test"
            },
            drawer: null,
            links: [
                ['mdi-inbox-arrow-down', 'Inbox'],
                ['mdi-send', 'Send'],
                ['mdi-delete', 'Trash'],
                ['mdi-alert-octagon', 'Spam'],
            ],
            menuselected: null,
            menu: [
                // {
                //     id: 1,
                //     title: "title test 1",
                //     urlName: "name test 1",
                //     url: "Pages/vmPage1.js",
                //     compName: "vmPage1"
                // },
                // {
                //     id: 2,
                //     title: "title test 2",
                //     urlName: "name2 test",
                //     url: "Pages/vmPage2.js",
                //     compName: "vmPage2"
                // }
            ],
            tabselected: null,
            tabs: [
                {
                    id: 1,
                    title: "tab 1",
                },
                {
                    id: 2,
                    title: "tab 2",
                }
            ],

            // sections: [
            //     {
            //         name: "search",
            //         dat: {
            //             fields: [
            //                 {
            //                     type: "text-input",
            //                     detail: {
            //                         name: '',
            //                         label: "444",
            //                         required: true,
            //                         nameRules: [
            //                             v => !!v || 'Name is required',
            //                             v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            //                         ],
            //                     }
            //                 },
            //                 {
            //                     type: "text-input",
            //                     detail: {
            //                         name: '',
            //                         label: "555",
            //                         required: true,
            //                         nameRules: [],
            //                     }
            //                 },
            //
            //                 {
            //                     type: "text-input",
            //                     detail: {
            //                         label: "sdsd",
            //                         name: '',
            //                         required: false,
            //                         nameRules: [
            //                             v => !!v || 'Name is required',
            //                             v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            //                         ],
            //                     }
            //                 }
            //             ],
            //             valid: true,
            //             // name: '',
            //             // nameRules: [
            //             //     v => !!v || 'Name is required',
            //             //     v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            //             // ],
            //             // email: '',
            //             // emailRules: [
            //             //     v => !!v || 'E-mail is required',
            //             //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            //             // ],
            //             // select: null,
            //             // items: [
            //             //     'Item 1',
            //             //     'Item 2',
            //             //     'Item 3',
            //             //     'Item 4',
            //             // ],
            //             // checkbox: false,
            //         }
            //     },
            //     {
            //         name: "v-table",
            //         dat: {}
            //     }
            // ],


        },
    methods: {
        getTabDetails(dat) {
            this.tabselected = dat;
            $(this.tabs).each(
                function (i, d) {
                    d.isselected = false;
                    if(d.id ==dat.id )
                        d.isselected = true;
                }
            );

            var thisVue = this;

            axios.get("getTabDetails.php?id=" + dat.id)
                .then((response) => {
                    thisVue.menu = response.data;
                    thisVue.getPage(thisVue.menu[0]);

                }, (error) => {
                    console.log(error);
                });
        },
        getPage(dat) {
            this.menuselected = dat;
            $(this.menu).each(
                function (i, d) {
                    d.isselected = false;
                    if(d.id ==dat.id )
                        d.isselected = true;
                }
            );


            var thisVue = this;
            $.ajax({
                type: "POST"
                , url: dat.url
                , dataType: "script"
                , success: function (s) {
                    Vue.component(dat.compName, window[dat.compName]);
                    thisVue.pageContent = dat.compName;
                }
            });

            // axios.get(i.url)
            //     .then((response) => {
            //
            //         Vue.component('async-example', function (resolve, reject) {
            //             resolve(response.data)
            //         })
            //
            //        this.pageContent =  'async-example';
            //
            //
            //         //$("head").append($("<script></script>").attr("src", response.data.js));
            //     }, (error) => {
            //         console.log(error);
            //     });

            //this.pageContent = component;
            //  console.log(i.url)  ;
        }
    },
    watch: {},
    mounted: function () {
        this.getTabDetails(this.tabs[0]);
    }
})
