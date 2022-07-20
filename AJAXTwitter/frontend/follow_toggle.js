class FollowToggle {
    constructor(el, options) {
        this.el = $(el)
        this.userId = this.el.data("user-id") || options.userId;
        this.followState = this.el.data("initial-follow-state") || options.followState;
        render()
    }
}

function render(){
    if(this.followState === "followed"){
       return "Unfollow!"
    } else {
        return "Follow!"
    }
}

// Next, write a FollowToggle#handleClick method.Install this click handler in the constructor.Your click handler should:

// Prevent the default action.
// Make a $.ajax request to POST / users /: id / follow if we are not following the user(check followState), else, it should make a DELETE request.
// On success of the POST / DELETE, we should toggle the followState and re - render.

function handleClick(){
    preventDefault();
    if(this.followState === "followed"){
        let theMethod = 'DELETE'
    } else {
        let theMethod = 'POST'
    }

    $.ajax({
        url: '/users/:id',
        method: theMethod, 

    })
}


module.exports = FollowToggle;