const opexaTracks = {
    softwareEngFS: {
        frontend: {
                html: {courseFacilitators: "Samson Adejumo"},
                css: {courseFacilitators: "Samson Adejumo"},
                javascript: {courseFacilitators: "Kayode, Brice, Aaron"},
                reactJS: {courseFacilitators: "Kayode, Paul"}
        },

        backend: {
                html: {courseFacilitators: "Samson Adejumo"},
                css: {courseFacilitators: "Samson Adejumo"},
                javascript: {courseFacilitators: "Kayode, Brice, Aaron"},
                nodeJS: {courseFacilitators: "Brice, Aaron"}
        },

        mobile: {
            flutter: {courseFacilitators: "Adu"}
        }

    },

    projectMgt: {
        courseFacilitators: "Musibau Lasisi, Dotun Kehinde"
    },

    lifeTransformation: {
        morningDevotion: {courseFacilitators: "Ushaseer, Sarah, Kayode, Dotun, Oyekunle"},
        Message: {courseFacilitators: "Onyeka, "},
        bookReview: {courseFacilitators: "Ushaseer Tembe"},
        PrayerFasting: {courseFacilitators: "Onyeka, David, "},
    },

    softwareProdMgt: {
            uiux: {courseFacilitators: "Joel Idoko"},
            prodMgt: {courseFacilitators: "Ushaseer Tembe"},
    },

    cyberSec: {
        courseFacilitators: "Timothy Green, Emmanuel, Sarah"
    },

    devOps: {
        courseFacilitators: "Dotun Kehinde"
    },
    
    dataSc: {
        courseFacilitators: "Joel Idoko"
    },
}

let mainTracks = ""
for(const key in opexaTracks) {
    const value = opexaTracks[key]
}