import { stackList } from "@/data/stacklist";
import Image from "next/image";

const TechStack = () => {
    const uniqueStack = Array.from(
        new Map(stackList.map(item => [item.name, item])).values()
    );
    return (
        <div className='mt-14'>
            <p className='text-center mb-4'>My Toolbox</p>
            <h3 className='text-4xl text-center'>Technologies I Work With </h3>

            <div className='flex flex-wrap items-center mt-12 justify-center gap-4 mx-auto max-w-200'>
                {
                    uniqueStack.map((item, index) => (
                        <li key={index} className='gradientAnimate cursor-pointer hover:-translate-y-2 border transition duration-[0.7s] rounded-2xl border-white/20 px-4 py-2 flex items-center gap-2'>
                            <Image src={item.icon} width={20} height={20} alt={`${item} icon`} />
                            <span>{item.name}</span>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default TechStack