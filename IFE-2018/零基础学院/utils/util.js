const utils = {
  // 获取id
  getID: (id) => {
    return document.getElementById(id);
  },
  // 处理点击事件
  eventHandle: (element, type, handle) => {
    if (element.addEventListener) {
      element.addEventListener(type, handle, false)
    }
    if (element.attachEvent) {
      element.attachEvent(`on${type}`, handle)
    }
  },
  
  // 对字符串去空格进行拓展(這個方法坑不需要)
  // trim: _ => {
  //   if (!String.prototype.trim) {
  //     String.prototype.trim = function(value) {
  //       return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  //     };
  //   }
  // },
  
  HtmlUtil: {
    /*1.用浏览器内部转换器实现html转码*/
    htmlEncode: function(html) {
      //1.首先动态创建一个容器标签元素，如DIV
      var temp = document.createElement("div");
      //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
      (temp.textContent != undefined) ? (temp.textContent = html) : (temp.innerText = html);
      //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
      var output = temp.innerHTML;
      temp = null;
      return output;
    },
    /*2.用浏览器内部转换器实现html解码*/
    htmlDecode: function(text) {
      //1.首先动态创建一个容器标签元素，如DIV
      var temp = document.createElement("div");
      //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
      temp.innerHTML = text;
      //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
      var output = temp.innerText || temp.textContent;
      temp = null;
      return output;
    },
    /*3.用正则表达式实现html转码*/
    htmlEncodeByRegExp: function(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&/g, "&");
      s = s.replace(/</g, "<");
      s = s.replace(/>/g, ">");
      s = s.replace(/ /g, " ");
      s = s.replace(/\'/g, "'");
      s = s.replace(/\"/g, "");
      return s;
    },
    /*4.用正则表达式实现html解码*/
    htmlDecodeByRegExp: function(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&/g, "&");
      s = s.replace(/</g, "<");
      s = s.replace(/>/g, ">");
      s = s.replace(/ /g, " ");
      s = s.replace(/'/g, "\'");
      s = s.replace(/"/g, "\"");
      return s;
    }
  },
}
