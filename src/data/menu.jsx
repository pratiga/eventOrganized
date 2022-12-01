export const menuItems = [
  {
    title: "Home",
    link:"/",
  },
  {
    title: "Services",
    link:"/service",
  },
  {
      title:"About",
      link:"/about"
  },
 
  {
      title:"Events",
     submenu:[
          {
              title:"List of Event",
              link:"/event",
          },
          {
              title:"Register Event",
              link:"/eventForm",
          }
      ]
  },
  {
      title:"Sponsors",
     submenu:[
          {
              title:"List of Sponsor",
              link:"/sponsors",
          },
          {
              title:"Register-Sponsor",
              link:"/sponserForm",
          }
      ]
  }
  
];
