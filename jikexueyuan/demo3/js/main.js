define(['require','main'], function(require) {
    require(['index'],function(index){
    index.init();
    index.list();
    index.pic();
    index.hot();
    index.learn();
    index.scrol();
    })
});