// import axios from 'axios'
import {
    make
} from 'vuex-pathify'

// setup store
const state = {
    addCreateNew: false,
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
// const actions = {}

// create store
export default ({
    namespaced: true,
    state,
    mutations,
    // actions
})