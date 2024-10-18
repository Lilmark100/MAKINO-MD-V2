theconst fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = true;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = ["256759329821"]; //like 2347080968564 
global.OwnerName =  "Lil Markos";
global.BotName = "♱MARKOS♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!


global.sessID = process.env.sessID |{"noiseKey":{"private":{"type":"Buffer","data":"SJ0S4Z5TRni+sxy8i/YgKwGEbt4JLAxDdTkFHofBK2w="},"public":{"type":"Buffer","data":"ouIEn+dhrIlG11BSMgvMzJHybJJpBL9NniiEOs02bW8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gIRX+LuxpK3qmNSRW6hbjIuLeQ40DGxyRZ/MvvuspnQ="},"public":{"type":"Buffer","data":"A54TS4gzS3T6Ty7SwWZ0SRs4mmzUPsmYXam5RPjBOww="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"ONJoPfEOLvcjZ0eju44bHV9FXLix8+UqO1X904iRtWE="},"public":{"type":"Buffer","data":"UY/l4AUwCc9fnYPEpR7hNNwZhBjz2C1bqRQ5wRHTsCQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"II1AaocmoYUOc7sUAtugIx+oW364e813+A4IDV00FWM="},"public":{"type":"Buffer","data":"2Zw5jy6KhPalBIyVnQpnCI4FvbcDmuV72BkpLMcGryw="}},"signature":{"type":"Buffer","data":"E+kvE0ZKComDkThZy3rtDygju58BPsx7mBfS9w1pAevXJEi3gPXUvmnXPa7dbQlEG7y0t8sjffRGNJ8nWO4HjA=="},"keyId":1},"registrationId":11,"advSecretKey":"yjZ+pD2ZcwGC/5HNageYF45KPp31mRTtsB7mBSRpiNY=","processedHistoryMessages":[{"key":{"remoteJid":"256759329821@s.whatsapp.net","fromMe":true,"id":"3BAA91987B9A757E6C70C37781DB6065"},"messageTimestamp":1729270195}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"aM3EhXOETcOVt6yoNjY0sQ","phoneId":"e0e20a45-ce9f-4a1d-b9b6-58bff996cbd1","identityId":{"type":"Buffer","data":"SMAPAwpz4TQKinkndj6fYAp03cM="},"registered":true,"backupToken":{"type":"Buffer","data":"NwhtbQkFEmID/LlP/iDg9birDqs="},"registration":{},"pairingCode":"GW6ZDKAG","me":{"id":"256759329821:3@s.whatsapp.net"},"account":{"details":"COL24fwCEJyjyrgGGBUgACgA","accountSignatureKey":"pyuIkFLCZHQzrfDq0cyYscyaw5x05MfMrXEHQ9X79Ug=","accountSignature":"0ZFp79YmbY7Ha+Borrf3vgiJNj2TvJeIWySVhanWO0N9KjOvfAhnvwVKSoe/Bj1rrb8OIdyOV+2/L0rZhhSUAw==","deviceSignature":"EBPTgfJNvdcuLz8GM7arsHbiLVXe74n2wcoZ6y0b5XxdbM9zR8gKdcUcrOODzC8lGzC6D7FHZzUj+1nHsKSGjQ=="},"signalIdentities":[{"identifier":{"name":"256759329821:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BacriJBSwmR0M63w6tHMmLHMmsOcdOTHzK1xB0PV+/VI"}}],"platform":"android","lastAccountSyncTimestamp":1729270185,"myAppStateKeyId":"AAAAAD7G"}| ``
global.prefa = [,] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
