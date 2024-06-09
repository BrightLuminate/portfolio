import Link from "next/link";
import { FaGithub, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/BrightLuminate' },
    { icon: <FaGithub />, path: 'https://brightluminate.github.io' }, // Use the correct icon for the blog or find the right one
    { icon: <FaYoutube />, path: 'https://www.youtube.com/@DohyeonChoi' }, // Removed extra quote
    { icon: <FaInstagram />, path: 'https://www.instagram.com/dohyeon428/?igsh=MWtjM21nMmg1MDFlcw%3D%3D&utm_source=qr' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100012920281549&locale=ko_KR' } // Removed extra quote
];

const Social = ({ containerStyles, iconStyles }) => {
    return ( 
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
};

export default Social;
