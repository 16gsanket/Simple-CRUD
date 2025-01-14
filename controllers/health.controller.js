const checkHealth =(req,res)=>{
    try {
        res.status(200).json({message: "everything is up"})
    } catch (error) {
        res.status(400).json({message: "something went wrong"})
    }
}

export default checkHealth