var APP_ID = 'gpTcnEoRTduggGQI4yrDlp1R-gzGzoHsz';
var APP_KEY = 'TjsE0R7Ola5ga08NMVp9l1UT';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// get
var query = new AV.Query('Message')
console.log(query)
query.find()
    .then(
        function(message){
            console.log(message)
            let array = message.map( (item) => item.attributes )
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.append(li)
            })
        }
    )


// save
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    name = myForm.querySelector('input[name=name]').value
    content = myForm.querySelector('input[name=content]').value
    var TestObject = AV.Object.extend('Message');
    var testObject = new TestObject();
    testObject.save({
        name: name,
        content: content
    }).then(function(object) {
        console.log('save ok')
        let li = document.createElement('li')
        li.innerText = `${name}: ${content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
    })
})

