# danmu
#### 一.原生JS实现弹幕效果，这是第二版，封装成插件,支持循环弹幕和自定义弹幕templates。😳

#### 二.用法:
###### 1.定义好你的弹幕池 
```javascript
  $('#wrapper').barrage({
      danmuPool:
            [{
                "corpName": "泰禾光电",
                "width": "w300",
                "corpUrl": "https://m.goodjobs.cn/corp.php?corpID=10192",
                "jobName": "深度学习算法工程师",
                "jobUrl": "https://m.goodjobs.cn/job.php?jobID=1358505"
            }, 
            {
                "corpName": "苏宁易购",
                "width": "w450",
                "corpUrl": "https://m.goodjobs.cn/corp.php?corpID=57587",
                "jobName": "B2B渠道客户经理",
                "jobUrl": "https://m.goodjobs.cn/job.php?jobID=1482519"
            }],
      danmuTpl: function(danmuPool){
        return "<a href='" + danmuPool.jobUrl + "'><span style='color:red;'>" + danmuPool.corpName + "</span>的<span style='color:blue;'>" + danmuPool.jobName + "</span>收到一份简历</a>";
      }
  });
```
:cow::beer:
