import { SiPowerbi } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiAzuredevops } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiTinkercad } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io5";
import { BiLogoNodejs } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa6";
import { IoLogoAngular } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { SiArduino } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiOracle } from "react-icons/si";
import { SiPowerautomate } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [ 10, -10 ],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity:0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiPowerbi style={{ color: '#E9C401' }} className="text-7xl"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <TbSql style={{ color: '#F57503' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiMicrosoftexcel style={{ color: '#186D3F' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiMicrosoftpowerpoint style={{ color: '#D14424' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiAzuredevops style={{ color: '#0078D4' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiCanva style={{ color: '#4FC5C9' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiPowerautomate style={{ color: '#3588F3' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <TbBrandCSharp style={{ color: '#68217A' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoHtml5 style={{ color: '#E44D26' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoCss3 style={{ color: '#264DE4' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaBootstrap style={{ color: '#8913FD' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoNpm style={{ color: '#CC3534' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <BiLogoNodejs style={{ color: '#8CC84B' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiTypescript style={{ color: '#2D79C7' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoJavascript style={{ color: '#F7E018' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoAngular style={{ color: '#C3002F' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaReact style={{ color: '#61DAFB' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaGithubAlt style={{ color: '#FD7383' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoPython style={{ color: '#3675A5' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiArduino style={{ color: '#00979C' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiMongodb style={{ color: '#00ED64' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiTinkercad style={{ color: '#94CA04' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiOracle style={{ color: '#FF0000' }} className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaJava style={{ color: '#5283A2' }} className="text-7xl"/>
            </motion.div>
        </motion.div>
    </div>
)
}

export default Technologies