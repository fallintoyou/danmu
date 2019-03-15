# danmu
1.原生JS实现弹幕效果，改了一版，支持循环弹幕和自定义弹幕templates，没有封装比较乱。:flushed:

2.用法:

(1).定义好你的弹幕池
let danmuPool = [
            {
                "corpName": "苏宁易购",
                "width": "w450",
                "corpUrl": "https://m.goodjobs.cn/corp.php?corpID=57587",
                "jobName": "B2B渠道客户经理",
                "jobUrl": "https://m.goodjobs.cn/job.php?jobID=1482519"
            },
                ];
                
(2).在setTemplates里设置好你的模版，比如弹幕这行要包哪些div，设置哪些a链接。
/**
 * 设置可渲染的模版
 * @param {[type]} danmuObj [description]
 */
function setTemplates(danmuObj){
return "<a href='"+danmuObj.jobUrl+"'><span style='color:red;'>"+danmuObj.corpName+"</span>的<span style='color:blue;'>"+danmuObj.jobName+"</span>收到一份简历</a>";
}
                
