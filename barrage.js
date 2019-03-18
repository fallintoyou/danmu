;~ function($) {
    let domPool = [];
    let hasPosition = [];
    let barrage = function(opt) {
        let defaultOpt = {
            max_dm_count: 1, // 最大限制
            channel_count: 2, // 通道
            allow_repeat: 1, // 允许重复
            danmuPool: [],
            danmuTpl: function(danmuPool) {
                return danmuPool;
            }
        }
        let options = $.extend({}, defaultOpt, opt);
        return this.each(function() {
            init($(this), options);
            setInterval(() => {
                let channel;
                if (options.danmuPool.length && (channel = getChannel(options)) != -1) {
                    let dom = domPool[channel].shift();
                    let text = options.danmuPool.shift();
                    shootDanmu(dom, text, channel, options);
                    if (options.allow_repeat) {
                        options.danmuPool.push(text);
                    }
                }
            }, 1);
        })
    }
    //初始化
    let init = function($this, options) {
        let wrapper = document.getElementById('wrapper');
        for (let j = 0; j < options.channel_count; j++) { //行 多少个一位数组
            let doms = [];
            for (let i = 0; i < options.max_dm_count; i++) { //列 多少个二位数组
                // 要全部放进wrapper
                let dom = document.createElement('span');
                wrapper.appendChild(dom);
                // 初始化dom的位置 通过设置className
                dom.className = 'right';
                // DOM的通道是固定的 所以设置好top就不需要再改变了
                dom.style.top = j * 20 + 'px';
                // 放入改通道的DOM池
                doms.push(dom);
                // 每次到transition结束的时候 就是弹幕划出屏幕了 将DOM位置重置 再放回DOM池
                dom.addEventListener('transitionend', () => {
                    dom.className = 'right';
                    // dom.style.transition = null;
                    // dom.style.left = null;
                    dom.style.transform = null;
                    domPool[j].push(dom);
                });
            }
            domPool.push(doms);
        }
        for (let i = 0; i < options.channel_count; i++) {
            hasPosition[i] = true;
        }
    }
    // 发射弹幕
    let shootDanmu = function(dom, text, channel, options) {
        // dom.innerText = text;
        dom.innerHTML = options.danmuTpl(text);
        dom.style.transform = `translateX(${-dom.clientWidth}px)`;
        dom.className = 'left';
        hasPosition[channel] = false;
        setTimeout(() => {
            hasPosition[channel] = true;
        }, dom.clientWidth * 10 + 1000);
    }
    // 获取一个可以发射弹幕的通道
    let getChannel = function(opt) {
        for (let i = 0; i < opt.channel_count; i++) {
            if (hasPosition[i] && domPool[i].length) return i;
        }
        return -1;
    }
    $.fn.extend({
        barrage: barrage
    })
}(jQuery)
