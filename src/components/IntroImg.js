import intorIMG from "../img/IntroImg.png"


const IntroImg = () => {
    return (
        <>
            <div className="relative">
                <img src={intorIMG} alt="IntroImg" />
                <div className="absolute rounded-3xl bg-white shadow-xl  py-5 px-5 top-52 -left-[110px]">
                    <div className="flex items-center">
                        <div>
                            👩‍🦰
                        </div>
                        <div>
                            <h3 className="text-lg">
                                Consultant
                            </h3>
                        </div>
                    </div>
                    <p className="w-[200px] text-[#C3C3C3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut ullamcorper in et amet.</p>
                </div>
                <div className="absolute rounded-3xl bg-white shadow-xl  py-5 px-5 top-[350px] left-[805px]">
                    <div className="flex items-center">
                        <div>
                            👩‍🦰
                        </div>
                        <div>
                            <h3 className="text-lg">
                                24/7 xizmatlar
                            </h3>
                        </div>
                    </div>
                    <p className="w-[200px] text-[#C3C3C3]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut ullamcorper in et amet.
                    </p>
                </div>
            </div>
        </>
    )
}

export default IntroImg