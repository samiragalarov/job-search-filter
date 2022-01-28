
data=[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

const al=JSON.stringify()
document.getElementById('logo1').innerHTML=`<img src="${data[0].logo}"/>`
document.getElementById('logo2').innerHTML=`<img src="${data[1].logo}"/>`
document.getElementById('logo3').innerHTML=`<img src="${data[2].logo}"/>`
document.getElementById('logo4').innerHTML=`<img src="${data[3].logo}"/>`
document.getElementById('logo5').innerHTML=`<img src="${data[4].logo}"/>`
document.getElementById('logo6').innerHTML=`<img src="${data[5].logo}"/>`

const job1= document.querySelector('#job1')
const job2= document.querySelector('#job2')
const job3= document.querySelector("#job3")
const job4= document.querySelector('#job4')
const job5= document.querySelector("#job5")

let umumiarray=[]




let frontendarray=[]
let frontendtrue=false


let seniorarray=[]
let seniortrue=false

let htmlarray=[]
let htmltrue=false

let cssarray=[]
let csstrue=false

let Javascriptarray=[]
let Javascripttrue=false

let reactarray=[]
let reacttrue=false


job1.style.display="none"
job2.style.display="none"
job3.style.display="none"
job4.style.display="none"
job5.style.display="none"
job6.style.display="none"

const skill=document.querySelector("#skill")
const skill2=document.querySelector("#skill2")
const skill3=document.querySelector("#skill3")
const skill4=document.querySelector("#skill4")
const skill5=document.querySelector("#skill5")
const skill6=document.querySelector("#skill6")


const SeniorFrontendDevoloper=document.querySelector("#box1")
const JuniorFrontendDeveloper=document.querySelector("#box2")
const FullstackDevoloper=document.querySelector("#box3")
const SoftwareDeveloper=document.querySelector("#box4")
const juniorbackendDevoloper=document.querySelector("#box5")
const Frontendnew=document.querySelector("#box6")

//
const SeniorFrontendDevoloperskill=['senior','html','css','javascript']
const JuniorFrontendDeveloperskill=['frontend','react','junior','javascript']
const FullstackDevoloperskill=['frontend','senior','html','css']
const SoftwareDeveloperskill=['frontend','react','css','javascript']
const juniorbackendDevoloperskill=['frontend','html','css','javascript']
const Frontendnewskill=['frontend','senior','html','react','javascript']



const allbutton=document.querySelectorAll('.box').forEach(item=>item.addEventListener('click',hey))
 






const frontend= document.querySelectorAll('.frontend').forEach(item => item.addEventListener('click',()=>{
   

    
    if (!frontendtrue) {
        frontendarray.push('frontend')
        frontendtrue=true
        document.getElementById('job1').style.display="flex"
        umumiarray.push('frontend')
        document.querySelector('.boxes').classList.add('kicik')
       


       
        
    }else if(frontendtrue){
        frontendarray.pop("frontend")
        frontendtrue=false
        document.getElementById('job1').style.display="none"
        umumiarray.splice(umumiarray.indexOf('senior'),1)
 
        
    }
   
    
    skill.innerHTML=frontendarray[0]
    
    
})


)
const frontendclose= document.querySelector("#close")
frontendclose.addEventListener("click",()=>{
    frontendtrue=false

    umumiarray.splice(umumiarray.indexOf('frontend'),1)
    hey()
    

    
    document.querySelector("#job1").style.display="none"
})
////////

const senior=document.querySelectorAll('.senior').forEach(item=> item.addEventListener('click',()=>{{
    if (!seniortrue) {
        seniorarray.push('senior')
        seniortrue=true
        document.getElementById('job2').style.display="flex"
        umumiarray.push('senior')
 
        
    }else if(seniortrue){
        seniorarray.pop("senior")
        seniortrue=false
        document.getElementById('job2').style.display="none"
        umumiarray.splice(umumiarray.indexOf('senior'),1)
        
         
         
        
        
    }
    
    skill2.innerHTML=seniorarray[0]
    console.log(seniorarray)

}}))
const seniorclose= document.querySelector("#close2")
seniorclose.addEventListener("click",()=>{
    seniortrue=false
    umumiarray.splice(umumiarray.indexOf('senior'),1)
    hey()
    
    
    document.querySelector("#job2").style.display="none"
})

/////

const html=document.querySelectorAll('.html').forEach(item=> item.addEventListener('click',()=>{{
  if (!htmltrue) {
      htmlarray.push('html')
      htmltrue=true
      document.getElementById('job3').style.display="flex"
      umumiarray.push('html')
      
  }else if(htmltrue){
      htmlarray.pop('html')
      htmltrue=false
      document.querySelector("#job3").style.display="none"
      umumiarray.splice(umumiarray.indexOf('html'),1)
      
  }
  
  skill3.innerHTML=htmlarray[0]
  console.log(htmlarray)
  

}}))
const htmlclose= document.querySelector("#close3")
htmlclose.addEventListener("click",()=>{
  htmltrue=false
  umumiarray.splice(umumiarray.indexOf('html'),1)
  hey()
  
  document.querySelector("#job3").style.display="none"
})
//////
const css= document.querySelectorAll('.css').forEach(item => item.addEventListener('click',()=>{
    
  if (!csstrue) {
      cssarray.push('css')
      csstrue=true
      document.getElementById('job4').style.display="flex"
      umumiarray.push('css')
      
  }else if(csstrue){
      cssarray.pop("css")
      csstrue=false
      document.getElementById('job4').style.display="none"
      umumiarray.splice(umumiarray.indexOf('css'),1)
      
  }
  
  skill4.innerHTML=cssarray[0]
  console.log(cssarray)
  
})

)
const cssclose= document.querySelector("#close4")
cssclose.addEventListener("click",()=>{
  csstrue=false
  umumiarray.splice(umumiarray.indexOf('css'),1)
  hey()
  
  document.querySelector("#job4").style.display="none"
})
///////

const JavaScript= document.querySelectorAll('.Javascript').forEach(item => item.addEventListener('click',()=>{
    
  if (!Javascripttrue) {
      Javascriptarray.push('javascript')
      Javascripttrue=true
      document.getElementById('job5').style.display="flex"
      umumiarray.push('javascript')
      
      
      
  }else if(Javascripttrue){
      cssarray.pop("javascript")
      Javascripttrue=false
      document.getElementById('job5').style.display="none"
      umumiarray.splice(umumiarray.indexOf('javascript'),1)
      
  }
  
  skill5.innerHTML=Javascriptarray[0]
  
  
})

)
const jsclose= document.querySelector("#close5")
jsclose.addEventListener("click",()=>{
  Javascripttrue=false
  
  umumiarray.splice(umumiarray.indexOf('javascript'),1)
  hey()
  
  document.querySelector("#job5").style.display="none"
})
////////
const raect= document.querySelectorAll('.react').forEach(item => item.addEventListener('click',()=>{
    
  if (!reacttrue) {
      reactarray.push('react')
      reacttrue=true
      document.getElementById('job6').style.display="flex"
      umumiarray.push('react')
      
      
      
  }else if(reacttrue){
      reactarray.pop("react")
      reacttrue=false
      document.getElementById('job6').style.display="none"
      umumiarray.splice(umumiarray.indexOf('react'),1)
      
  }
  
  skill6.innerHTML=reactarray[0]
  
  
})

)
const reactclose= document.querySelector("#close6")
reactclose.addEventListener("click",()=>{
  reacttrue=false
  
  umumiarray.splice(umumiarray.indexOf('react'),1)
  hey()
  
  document.querySelector("#job6").style.display="none"
})



///////    chechkkkkk (yoxla)
function hey(){
  
  
    
     if (umumiarray.every(elem => SeniorFrontendDevoloperskill.includes(elem))) {
       
     
       SeniorFrontendDevoloper.style.display="flex"

      
     }else{
       
       SeniorFrontendDevoloper.style.display="none"
    
     } 

      if (umumiarray.every(elem => JuniorFrontendDeveloperskill.includes(elem)))  {
        JuniorFrontendDeveloper.style.display = "flex"
       

        

      }else{

        JuniorFrontendDeveloper.style.display="none"
    
        } 

      if ( umumiarray.every(elem => FullstackDevoloperskill.includes(elem))) {
        FullstackDevoloper.style.display = "flex"

      }else{
        
        FullstackDevoloper.style.display="none"
    
      } 
      if (umumiarray.every(elem => SoftwareDeveloperskill.includes(elem))) {
        SoftwareDeveloper.style.display = "flex"

      }else{
        SoftwareDeveloper.style.display="none"
    
      } 
      if (umumiarray.every(elem => juniorbackendDevoloperskill.includes(elem))) {
        juniorbackendDevoloper.style.display = "flex"

      }else{
        juniorbackendDevoloper.style.display="none"
    
      } 
      if (umumiarray.every(elem => Frontendnewskill.includes(elem))) {
        Frontendnew.style.display = "flex"

      }else{
        Frontendnew.style.display="none"
    
      } 

   
    
    
    
  

}
/////











