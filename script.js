/* .js files add interaction to your website */
var factList= [
"75% of girls who have ADHD never get diagnosed.",

"Despite contradicting evidence, some doctors, psychiatrists and therapists still believe that adhd only affects boys.",

"There are 3 types of ADHD: Impulsive and Hyperactive(symptoms include excess energy and little impulse control), Inattentive (patients are easily distracted, poorly organized, or forgetful), or a combination (includes symptoms of both other types of ADHD).",

"Girls are more likely than their peers to develop inattentive ADHD, while boys are more likely to develop Impulsive and Hyperactive ADHD.",

"Girls with undiagnosed ADHD are more likely to develop mental health issues such as: Depression, Anxiety, Low self-esteem, Eating disorders, and more.",

"Girls are more likely to be diagnosed with ADHD in their adult years.",

"According to a national 2016 parent survey,1 6 in 10 children with ADHD had at least one other mental, emotional, or behavioral disorder.",

"To this day some medical professionals believe that adhd is something that primarily affects boys and men — not girls and women.",

"Women are more likely to be diagnosed with other disorders like mood disorders or anxiety, rather than adhd.",

"Only 3.2 percent of women get diagnosed with adhd, most of them don't get diagnosed until they are late teens or adults.",
];

console.log  (factList [0])

var fact= document.getElementById("factList");
var factButton= document.getElementById("factButton"); 
var count=0

if (factButton !=null){

  factButton.addEventListener("click", displayFact);
}

function displayFact(){

  fact.innerHTML=factList[count];
  count++;
  if (count==factList.length){
    count=0;
  }
}
