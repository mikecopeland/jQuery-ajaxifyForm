module("Setup");


$(document).ready(function(){
    ajaxifyGetForm = $("form[name='getForm']").ajaxify({
        onSubmit: function(){
            getSubmitted = true;
        }
    });
    ajaxifyPostForm = $("form[name='postForm']").ajaxify({
        onSubmit: function(){
            postSubmitted = true;
        }
    });

});

module("Constructor");
test("Constructor", function() {
  ok(ajaxifyGetForm, "object ajaxifyGetForm exists");
  ok(ajaxifyPostForm, "object ajaxifyPostForm exists");
});

module("GET form post") ;
test("submit form via get", function(){
      $("input[name='getSubmit']").click();
      ok(getSubmitted, "form submitted via GET");
      ok(getOnSubmitCalled, "GET form onSubmit called");
});

module("POST form post") ;
test("submit form via post", function(){
      $("input[name='postSubmit']").click();
      ok(postSubmitted, "form submitted via Post");
      ok(postOnSubmitCalled, "POST form onSubmit called");
});