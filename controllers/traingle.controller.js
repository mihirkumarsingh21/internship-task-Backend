
export const claculateHypotenuse = async (req, res) => {
    try {
        // here taking value of base and height from body.
        let {base, height} = req.body;

        // here converting base and height to number if user pass a value as a string.
        base = Number(base);
        height = Number(height);

        // checking does user provide required values.
        if(!base || !height) return res.status(400).json({
            success: false,
            message: "base and height are required."
        })

        
        // here we are checking the type of the value so if type of value is string then it return as message to the user.
        if(typeof base !== "number" || typeof height !== "number") return res.status(400).json({
            success: false,
            message: "base and height must be a number."
        })

        // here preventing user to pass a negative value.
        if(base < 0 || height < 0) return res.status(400).json({
            success: false,
            message: "base and height can not be less than 0"
        })

        // here calculating hypotenuse.
        const hypotenuse = Math.sqrt(base ** 2 + height ** 2);

        // here if calculation is failed to calculate hypotenuse then we are retunring a response to the user.
        if(!hypotenuse) return res.status(400).json({
            success: false,
            message: "failed to calculate hypotenuse."
        })

        // here sending success response.
        res.status(200).json({
            base,
            height,
            hypotenuse
        })


    } catch (error) {
        console.log(`error while calculating hypotenuse : ${error}`);
        
        res.status(500).json({
            success: false,
            message: `server error something went wrong: ${error}`
        })
        return;
    }
}