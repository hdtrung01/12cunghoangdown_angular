import { getTimeGivenProgression } from "@ionic/core";

class nhanvien{
    id:string;
    name : string;
    date : string;
    checkin: string;
    checkout:string;

 danhsach = new Array<chamcong>(  
    {
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/1/20",
    "checkout": "07:53:00",
    "checkin": "17:06:20"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/2/20",
    "checkout": "07:54:00",
    "checkin": "17:07:50"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/3/20",
    "checkout": "07:59:00",
    "checkin": "17:02:05"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/4/20",
    "checkout": "07:55:00",
    "checkin": "17:04:55"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/5/20",
    "checkout": "07:56:00",
    "checkin": "17:06:45"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/6/20",
    "checkout": "07:57:00",
    "checkin": "17:08:55"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/7/20",
    "checkout": "07:55:00",
    "checkin": "17:09:35"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/8/20",
    "checkout": "07:58:20",
    "checkin": "17:06:35"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/9/20",
    "checkout": "07:59:40",
    "checkin": "17:09:33"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/10/20",
    "checkout": "08:34:13",
    "checkin": "16:09:25"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/11/20",
    "checkout": "07:52:45",
    "checkin": "17:05:15"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/12/20",
    "checkout": "07:51:40",
    "checkin": "17:07:10"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/13/20",
    "checkout": "07:57:30",
    "checkin": "17:06:55"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/14/20",
    "checkout": "07:59:50",
    "checkin": "17:05:20"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/15/20",
    "checkout": "07:58:00",
    "checkin": "17:05:10"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/16/20",
    "checkout": "07:56:20",
    "checkin": "17:06:30"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/17/20",
    "checkout": "07:56:10",
    "checkin": "17:08:40"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/18/20",
    "checkout": "07:56:10",
    "checkin": "17:08:40"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/19/20",
    "checkout": "07:56:10",
    "checkin": "17:08:40"
},
{
    "id": "MS-NVNS 012",
    "name": "Nguyễn Văn A",
    "date": "12/20/20",
    "checkout": "07:56:10",
    "checkin": "17:08:40"
}
) 

newdanhsach : Array<chamcong>

 calcWorkinghours():Array<{date:string,name:string,time:string}>{

this.danhsach.forEach(element => {
  const  fstart:string = element.date + element.checkin;
  const  fend  = element.date + element.checkout;
  const  start = new Date(fstart)
  const  end = new Date(fend)
  const  ftime = end.getTime()-start.getTime()
  const time = ftime/36000000;

});
 
    return;
}}

interface chamcong{
    id:string;
    name : string;
    date : string;
    checkin: string;
    checkout:string;
}










