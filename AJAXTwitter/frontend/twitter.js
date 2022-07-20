const FollowToggle = require("./follow_toggle")

require './follow_toggle.js'


$(document).ready(function() {
    let $buttons = $("button")
    for (let i =0; i < $buttons.length; i++){
        let followToggle = new FollowToggle($(buttons[i]))
    }
}

