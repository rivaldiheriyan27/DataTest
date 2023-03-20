const { Participant } = require("../models/index");

class participantController{
    static async ParticipantAll(req,res,next){
        try{

            const {collectedDate} = req.query;

            const options = {
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            }

            if(collectedDate){
                options.where = {
                    collectedDate : collectedDate
                }
            }

            const dataParticipant = await Participant.findAll({
                attributes:{
                    exclude: ["createdAt", "updatedAt"]
                }
            })

            let NumberOfParticipants = 0
            let ParticipantsCompleted = 0 

            for(let i = 0 ; i < dataParticipant.length; i++){
                NumberOfParticipants += 1

                let participant = await Participant.findAll({
                    where:{
                        statusTest: "Done"
                    }
                }) 

                console.log(participant)

                if(participant.length){
                    ParticipantsCompleted = participant.length
                }
            }

            res.status(200).json({
                statuscode:200,
                data:{
                    ParticipantsCompleted: ParticipantsCompleted,
                    NumberOfParticipants : NumberOfParticipants,
                    dataParticipant
                }
            })
        }catch(error){
            console.log(error)
            next(error)
        }
    }

    static async Participant(req,res,next){
        try{
            const { id } = req.params;

            console.log(id)

            const dataParticipant = await Participant.findByPk(id,{
                attributes:{
                    exclude: ["createdAt", "updatedAt"]
                }
            })


            if(!dataParticipant){
                throw { name : "Parcipant Not Found"}
            }
            
            res.status(200).json({
                statuscode:200,
                data:dataParticipant
            })
        }catch(error){
            console.log(error)
            next(error)
        }
    }
}

module.exports = {participantController}