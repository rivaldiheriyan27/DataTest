import axios from 'axios'

const baseUrl = "http://localhost:4000"

export const participantsData = async (token) => {
    try{
        console.log(token)
        const dataBaru = await axios.get(`${baseUrl}`,{
            // headers: {
            //     access_token: `${token}`,
            // },
          })

        console.log(dataBaru)
        return dataBaru
    }catch(err){
        throw err
    }
}

export const participantData = async (id,token) =>{
    try{
        return await axios.get(`${baseUrl}/${id}`,{
            // headers: {
            //     access_token: `${token}`,
            // },
          })
    }catch(err){
        throw err
    }
}