
export const calculateInterest = (req, res) => {
    try {

        let {principal, rate, time} = req.body;

        if(!principal || !rate || !time) return res.status(400).json({
            success: false,
            message: "principle, rate and time are required."
        })

        principal = Number(principal);
        rate = Number(rate);
        time = Number(time);

        if(typeof principal !== "number" || typeof rate !== "number" || typeof time !== "number") return res.status(400).json({
            success: false,
            message: "principle, rate and time must be a number."
        })


        const amount = Math.floor(principal * Math.pow((1 + rate / 100), time));
        const compoundInterest =Math.floor (amount - principal);

        if(!amount || !compoundInterest) return res.status(400).json({
            success: false,
            message: "failed to calculate amount or compund interest."
        })

        res.status(200).json({
            success: true,
            principal,
            rate,
            time,
            amount,
            compoundInterest
        })



    } catch (error) {
        console.log(`error while calculating interest :${error}`);
        
        res.status(500).json({
            success: false,
            message: `server error something went wrong: ${error}`
        })
        return;
    }
}