
class Challenge {
    constructor(type,x){   //type is a number that relates to daily or weekly
        this.type = type;    
        this.x = x + this.type;  //x relates to "difficulty" of challenge     
        this.id = int(Math.random * 3);  //specific challenge
        this.done = false;    //if completed    
        this.date = new Date(Date.now);
    }

    reward(type){
        if (type == Daily)
        {
            return 5; //returns most likely coins, amount can be tweaked
        }
        else
        {
            return 25; 
        }
    }

    progress(type,money)
    {
        if (((this.id == 0 && game_done) || (this.id == 1 && game_won) || //some placeholder variables
        (this.id == 2 && points < 5)) && this.done == false)
        {
            this.x--; //progress gained
        }

        if (this.x <= 0) //challenge complete
        {
          money += this.reward(type);
          this.done = true;
        }
    }

    expired() //when called sets any challenges to done if they should expire
    {
        let current_date = new Date(Date.now);
        if (current_date - this.date >= 1 && this.type == 1) //dailys
        {
            this.done = true;
        }

        if (current_date - this.date >= 7 && this.type == 7) //weekly
        {
            this.done = true;
        }
    }
}


 function daily_challenges() //when called creates daily challenges
 {
    x = int(1 + Math.random() * 3);
    challenge1 = Challenge(1,x);
    challenge2 = Challenge(1,x);
 }

 function weekly_challenge() //when called creates a weekly challenge
 {
    x = int(1 + Math.random() * 3);
    challenge3 = Challenge(7,x);

 }

function remove() //when called removes any expired or completed challenges
{
    if (challenge1.done)
    {
        delete challenge1;
    }

    if (challenge2.done)
    {
        delete challenge2;
    }

    if (challenge3.done)
    {
        delete challenge3;
    }
}





