/**
 * 题目描述：
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

// 第一种做法：利用正则表达式（最优解）
function replaceSpace(str)
{
    return str.replace(/\s/g, '%20');
}

//第二种做法
function replaceSpace(str)
{
    let strLen = str.length,
        result = '';
    for(let i = 0; i < strLen; i++) {
        result += (str[i] !== ' ') ? str[i] : '%20';
    }
    return result;
}