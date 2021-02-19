import { homePage } from '../views/home.js'
import { detailPage } from '../views/detail.js'



export default function router() {

    routie({

      // if theres nothing behind the '/'
      '': async (body) => {

        // select main with class of detailPage
        const removeDetail = document.querySelector('.detailPage')

        // if the detailPage is there, remove it
        if (removeDetail !== null) {
          removeDetail.remove()
        }

        homePage()
      },

      // if theres 'gif / a gif id' behind the '/'
      'gif/:id': async (id) => {

        // select main with class of homePage
        const removeHome = document.querySelector('.homePage')
       
        // if the homePage is there, remove it
        if (removeHome !== null) {
          removeHome.remove()
        }
       
        // and fetch the data from the API using the gifs ID
        const res = await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3`)
        const data = await res.json()
        detailPage(data.data)
      },
    })
}
