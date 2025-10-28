import logo from './Logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './PlayStation.jpg'
import project_img_2 from './BreakFast.jpg'
import project_img_3 from './Transport.jpg'
import project_img_4 from './project_img_4.jpg'
import image_right from './Right.jpg'
import image_left from './Left.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import video_apartman from './VideoApartmana.mp4'
import video_aparman_dark from './VideoApartmanaDark.mp4'


export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
    video_apartman,
    video_aparman_dark,
    image_right,
    image_left
}

export const projectsData = [
    {
      title: "PlayStation 5",
      price: "$25",
      image: project_img_1
    },
    {
      title: "Breakfast",
      price: "$50",
      image: project_img_2
    },
    {
      title: "Transport",
      price: "$50",
      image: project_img_3
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];