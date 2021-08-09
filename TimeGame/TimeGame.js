//Generating Current Date and Time.
var Date = new Date();
var dd = String(Date.getDate()).padStart(2, '0');
var mm = String(Date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = Date.getFullYear();
var CurrentDate = mm + "/" + dd + "/" + yyyy
var Time = Date.getHours() + ":" + Date.getMinutes();

//Checking date. If date equals corresponding date then output text for that date. If not check times. 
function CheckDate(){
  if (CurrentDate.includes("05/26/")){
    var AnniversaryText = ["Hey baby", "Happy Anniversary!", "I love you so very much", "I'm so glad were together and we plan to live out our lives together.", "\u2661"];
    OutputText(AnniversaryText);
  }
  else if(CurrentDate.includes("06/02")){
    var BirthdayText = ["Hey Darling", "Happy Birthday", "I'm so glad I can be your boyfriend and your mines.","I hopes you have a great day" ,"I love you so very much", "Mwah", "\u2661"];
    OutputText(BirthdayText);
  }
  else{
    CheckTimes();
  }
}

//Checking time. If time is an equal hour like 6:00 then output corresponding text. If not output corresponding text.
function CheckTimes(){
  if (Date.getMinutes() == "00"){
    var TimeText = ["Hey darling", "It's " + Time, "I love you so very much,", "mwahhhhh", "\u2661"];
    OutputText(TimeText);   
  }
  else{
    var NotTimeText = ["Hey", "It is not time", "Still love you tho", "mwah", "\u2661"];
    OutputText(NotTimeText);
  }
}

//Outputs array given onto the paragraph tag. 
function OutputText(Array){
  let lasttime = 1000
  for (let i = 0; i < Array.length; i++){
      setTimeout(() => {document.getElementById("Output").innerHTML = Array[i];}, lasttime);
      lasttime = lasttime + 1000;
    }       
}
CheckDate();