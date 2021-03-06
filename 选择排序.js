
    function ArrayList(){
        var array = [];
        /* 通过构造函数的方法创建对象 */
            this.insert = function(item){
                /*实现push方法*/
                array.push(item)
            };
            /* join方法 */
            this.toString = function(){
                return array.join();
            }
            /*选择排序 基本思路 找到最小的一位放在第一个 以此类推*/
            this.selectionSort = function(){
                /* 获取长度 以好循环 */
                var length = array.length,
                    /* 最小的那个参数 */
                    indexMin;
                    for(var i=0;i<length-1;i++){
                        /*假设 这个i 就为最小的值*/
                        indexMin = i;
                        /* 第二次循环才是真的  才是对内部进行循环*/
                        for( var j=i;j<length;j++){
                            /* 难点之一 不知道这是什么意思 ; 解答: 想了半天: 这样子 先循环外面再循环内部  */
                            /* 先循环这个:内部循环 所以取的值是 array[0] > array[5]  接下来 循环过后: 内部循环得到了最小值 */
                            /* 再次循环再次得到 */
                            if(array[indexMin] > array[j]){
                                indexMin = j
                            }
                        }
                        /*待续 替换最新的值  新值替换老值*/
                        if(i !== indexMin){
                            swap(i,indexMin)
                        }
                    }
            }
              var swap = function (index1,index2){
                /* 实现替换的 */
                var aux = array[index1];
                /* 替换 */
                array[index1] = array[index2];
                /* 重新赋值 */
                array[index2] = aux;
            }
    }
      function createNonSortedArray(size){
            /* 函数里面调用了 new ArrayList */
            var array = new ArrayList();
            /* 实现5 4 3 2 1 */
            for(var i=size;i>0;i--){
                /*添加inser*/
                array.insert(i);
            }
            return array;
        }
        var array = createNonSortedArray(5);
        console.log(array.toString());//输出 54321
        /* 这个时候array 54321  */

        /* 运行 5>4>3>2>1 取到最小的值进行比较以此类推  输出结果 1<2<3<4<5  */
        array.selectionSort();

        console.log(array.toString())
