let mobiles = {
    iphone: {
        v14: {
            ram: 4,
            rom: 32,
            price: 1000

        },
        v14pro: {
            ram: 8,
            rom: 64,
            price: 12800

        },
        v13: {
            ram: 2,
            rom: 6,
            price: 120

        },
        v13pro: {
            ram: 8,
            rom: 64,
            price: 12800

        },

    },
    samsung: {
        a30: {
            ram: 8,
            rom: 64,
            price: 12800

        },
        a51: {
            ram: 8,
            rom: 64,
            price: 12800
        },
        note5: {
            ram: 8,
            rom: 64,
            price: 12800
        },

    },
    xiaomo: {
        redmi9: {
            ram: 32,
            rom: 64,
            price: 178
        },
        red: {
            ram: 16,
            rom: 128,
            price: 999
        },

    },
    infinix: {
        hot11: {
            ram: 32,
            rom: 64,
            price: 178
        },
        hot12: {
            ram: 2,
            rom: 4,
            price: 30
        }


    }

}


// by object

let ans = {...mobiles}
let ans2=Object.keys(ans);
console.log(ans2)
console.log(ans["samsung"]["a30"]);



// by aaryy


favMovies = ['Begin Again', 'Soul',['Matrix', 'Matix Reloaded', 'Matrix Revolutions'],['Frozen', 'Frozen 2', ['Tangled', 'Alladin']]]

let arryans= [...favMovies,"zain"];
console.log(arryans)





