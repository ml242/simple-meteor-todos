describe("task", function(){
  describe("template", function(){
    it("displays the count of todo's", function(){
      var title = $('h1')
      title = title[0].innerHTML.split()
      title = title[0].split("")
      expect(typeof(parseInt(title[11]))).toEqual('number');
    });
  });
});