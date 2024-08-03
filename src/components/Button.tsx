import React from 'react';

interface btnProps {
    text: string,
}

const Button = ({ text }: btnProps) => {
    return (
        <button className="relative py-3 px-3 rounded-lg font-medium text-sm bg-gradient-to-b
              from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
            <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 
                  [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40
                  [mask-image:linear-gradient(to_top, black, transparent)]"></div>
                <div className="absolute inset-0 shadow-[0px_0px_10px_rgba(140, 69, 255, 0.7)_inset]
                  rounded-lg"></div>
            </div>

            <span>
                {text}
            </span>
        </button>
    );
}

export default Button;
