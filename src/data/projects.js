import technoshine from "../assets/images/technoshine.png"
import oksi from "../assets/images/oksi.png"
import eagles from "../assets/images/eagles.png"




const projects = [
  {
    title: 'Oksi',
    description:
      'An IoT-based automated irrigation and environmental monitoring system for urban farming using ESP32, multiple sensors, and a mobile app.',
    tech: ['ESP32', 'IoT', 'React Native', 'Expo Go'],
    live: '#',
    image: oksi,
    github: 'https://github.com/surxy26/Oksi',
  },
  {
    title: 'Ang Agila',
    description:
      'A website for the Fraternal Order of Eagles keeps members updated on the latest news regarding the brotherhood. This website is accessible via QR Code on the back of the Eagles membership ID',
    tech: ['PHP', 'MySQL', 'Laravel'],
    image: eagles,
    live: 'https://tfoepe-inc.com.ph/',
  },
  {
    title: 'Technoshine',
    description:
      'Technoshine is a digital showcase of milestone projects, innovative outputs, and valued customers through the years. Customers can explore their portfolio and connect with them directly to start new collaborations.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    image: technoshine,
    live: 'https://technoshineph.com/',
  },
]

export default projects