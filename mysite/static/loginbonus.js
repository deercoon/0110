
class Reward {
        constructor(id,obtained){            // Id meaning the specific reward,      
            this.id = id;                    // obtained meaning if the player has this reward 
            this.obtained = obtained;        //unlocked already or not
        }
}


function determine_reward()
{
    let date = new Date(Date.now);
    let reward = new Reward(date.getDate(),false);  // cant currently check if item is obtained,                                             
    return reward;                                  //but creates a reward with id = to the date
}

function get_reward(reward,player,obtained)
{
    if (obtained == false)
    {
        reward = determine_reward();
    }
    reward.obtained = true;
    return reward;
}