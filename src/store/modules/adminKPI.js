// import axios from 'axios'
import { make } from 'vuex-pathify'
import axios from 'axios'

// setup store
const state = {
    addCreateNew: true,
    newTeamName: '',
    addNewTeam: [],
    kpiHeading: '',
    kpiDescription: '',
    eraHeading: '',
    eraDescription: '',
    searchField: '',
    groupInvolvedImg: [{
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    ],
    allMembers: [{
        name: 'Mahima',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Manish',
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        name: 'Saurabh',
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    {
        name: 'Manish Joy',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Deepak Mishra',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Prateek',
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        name: 'Juhi',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Shweta',
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    {
        name: 'Kartik',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Nadeem',
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        name: 'Mridul',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Vivek',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Yogendra',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Rohit',
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    {
        name: 'Ruchi',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Shraddha',
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        name: 'Arun',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Sagar',
        src: "/img/a5.84f014f0.jpg",
        variant: "primary"
    },
    {
        name: 'Ashutosh',
        src: "/img/a3.f6dc73f2.jpg",
        variant: "primary"
    },
    {
        name: 'Nitin',
        src: "/img/a6.2966ab8e.jpg",
        variant: "primary"
    },
    ]
}
const mutations = make.mutations(state)
const actions = {
    async addManagement({ commit, dispatch }, payload) {
        let data = {
            kpi_name: payload.kpi_name,
            kpi_json: [
                {
                    title: " ",
                    desc: " ",
                    edit: "false",
                    addKpi: true
                }
            ],
            kra_json: [
                {
                    title: " ",
                    desc: " ",
                    edit: "false",
                    addEra: true
                }
            ]
        }
        await axios.post('http://5.9.144.226:8000/kpi', data, {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${payload.token}`
            }
        }).then(response => {
            dispatch('getKpiEra', { kpiEraId: response.data, token: payload.token })
        })
    },
    async getKpiEra({ commit }, data) {
        await axios.get('http://5.9.144.226:8000/kpi', {
            headers: {
                "Authorization": `Bearer ${data.token}`
            }
        }).then(response => {
            commit('addNewTeam', response.data)
        })
    },
    async updateKpi({ commit, dispatch }, payload) {
        let data = {
            kpi_name: payload.data.kpi_name,
            kpi_json: [
                {
                    title: payload.data.kpi_json[0].title,
                    desc: payload.data.kpi_json[0].desc,
                    edit: "false"
                }
            ],
            kra_json: [
                {
                    title: "xxxx",
                    desc: "xxxx",
                    edit: "false"

                }
            ]
        }
        await axios.put(`http://5.9.144.226:8000/kpi/${payload.data._id}`, data, {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${payload.Authorization}`
            }
        }).then(response => {
            console.log(response);
        }).catch(e => {
            console.log(e);
            dispatch('getKpiEra', { token: payload.Authorization })
        })
    },
    async delKpi({ commit, dispatch }, data) {
        await axios.delete(`http://5.9.144.226:8000/kpi/${data.id}`, {
            headers: {
                "Authorization": `Bearer ${data.Authorization}`
            }
        }).then(response => {
            console.log(response);
        }).catch(e => {
            console.log(e);
            dispatch('getKpiEra', { token: data.Authorization })
        })
    }
}

// create store
export default ({
    namespaced: true,
    state,
    mutations,
    actions
})