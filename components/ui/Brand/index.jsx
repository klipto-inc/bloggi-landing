import Image from "next/image"
import logo from "../../../public/Images/bloggilogo.png"

const Brand = ({ ...props }) => (
    <Image
        src={logo}
        alt="Split logo"
        {...props}
        width={100}
        height={58}
        className="h-auto w-[130px]"
        priority
    />
)
export default Brand