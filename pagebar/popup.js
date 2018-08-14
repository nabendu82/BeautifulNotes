var myWindowId;
const contentBox = document.querySelector("#content");

/*
Make the content box editable as soon as the user mouses over the sidebar.
*/
window.addEventListener("mouseover", () => {
  contentBox.setAttribute("contenteditable", true);
});

/*
When the user mouses out, save the current contents of the box.
*/
window.addEventListener("mouseout", () => {
  contentBox.setAttribute("contenteditable", false);
  console.log('Will set value ', contentBox.value)
    let contentToStore = {};
    contentToStore['contentText'] = contentBox.value;
    browser.storage.local.set(contentToStore);
   console.log('contentToStore is ', contentToStore)


});


browser.storage.local.get().then(results => {

  console.log('result is ', results);
  contentBox.value = results['contentText'];


});



