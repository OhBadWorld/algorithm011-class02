/**
 * @param {string} s
 * @return {number}
 */
//动态规划
var numDecodings=function(s){
    if (s[0] == '0') return 0;
    const len=s.length;
    const dp=new Array(len+1);
    dp[0]=1;dp[1]=1;
    for (let i =1; i < len; i++) {  
        const prev=s[i-1],cur=s[i]  
        if(cur==="0"){
            if(prev==='1'||prev==='2'){
                //最会两位要么是10要么是20 如2122210只能拆为21222和10
                dp[i+1]=dp[i-1]
            }else{
                //0前面只能是1或者2，其他的都是非法字符串如212230（2122和30以及21223和0都是非法的）
                return 0
            }
        } else{
             //s[i-1]s[i]两位数要小于26的情况
            if(prev==="1"||prev==='2'&&cur<=6){
                //最后两位在 10~26 之间如 1212121， 可以翻译成 12121 + 21， 或者 121212 + 1
                dp[i+1]=dp[i]+dp[i-1]
            }else{
                //最后两位不在 10~26 之间如 1212137 那只能翻译成 121213 + 7
                dp[i+1]=dp[i]
            }
        }
    }
    return dp[len];
}