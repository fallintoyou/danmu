# danmu
#### 一.原生JS实现弹幕效果，这是第二版，封装成插件,支持循环弹幕和自定义弹幕templates。😳

#### 二.用法:
###### 1.弹幕自定义
```javascript
  $('#wrapper').barrage({
      max_dm_count: 1, // 最大限制
      channel_count: 2, // 通道
      allow_repeat: 1, // 允许重复
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
###### 2.弹幕非自定义
```javascript
  $('#wrapper').barrage({
      danmuPool:['第一条弹幕','第二条弹幕'],
      danmuTpl: function(danmuPool){
        return danmuPool;
      }
  })
```
:cow::beer:
