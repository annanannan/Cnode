let userInfor = {
    avatar_url:' ',  
    loginname:' '   
}
export default function getUserInfor(state=userInfor,action){
    switch(action.type){
        case 'get_user_infor':
            console.log(action);
            return action.userInfor;
        default:
            return state;
    }
}

