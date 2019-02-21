const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    CANADA:  Symbol("canada"),
    UNITEDSTATES : Symbol("unitedstates"),
    INDIA: Symbol("india"),
    GERMANY: Symbol("germany"),
    AUSTRALIA : Symbol("australia"),
    JAPAN : Symbol("japan"),
    RUSSIA : Symbol("russia"),
    SPAIN : Symbol("spain"),
    BRAZIL : Symbol("brazil"),
    AFGHANISTAN : Symbol("afghanistan"),
    FRANCE : Symbol("france"),
    UNITEDKINGDOM : Symbol("unitedkingdom"),
    ITALY : Symbol("italy")


});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Let's play the game of guessing Capital of different Countries. What is the Capital of Canada?";
                this.stateCur = GameState.CANADA;
                break;
            case GameState.CANADA:
                if(sInput.toLowerCase().match("ottawa")){
                    sReply = "What is the Capital of United States?";
                    this.stateCur = GameState.UNITEDSTATES;
                }else{
                    sReply ="Try Again..!!";
                    this.stateCur = GameState.CANADA;
                }
                break;
            case GameState.UNITEDSTATES:
            if(sInput.toLowerCase().match("washington")){
                sReply = "What is the Capital of India?";
                this.stateCur = GameState.INDIA;
            }else{
                sReply ="Try Again..!!";
                this.stateCur = GameState.UNITEDSTATES;
            }
            break;    
            case GameState.INDIA:
                if(sInput.toLowerCase().match("delhi")){
                    sReply = "What is the Capital of Germany?"
                    this.stateCur = GameState.GERMANY;
                }else{
                    sReply = "Try Again..!!";
                    this.stateCur = GameState.INDIA;
                }
                break;
            case GameState.GERMANY:
                if(sInput.toLowerCase().match("berlin")){
                    sReply = "What is the Capital of Australia?";
                    this.stateCur = GameState.AUSTRALIA;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.GERMANY;
    
                }
                break;
            case GameState.AUSTRALIA:
                if(sInput.toLowerCase().match("canberra")){
                    sReply = "What is the Capital of Japan?";
                    this.stateCur = GameState.JAPAN;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.AUSTRALIA;
    
                }
                break;
            case GameState.JAPAN:
                if(sInput.toLowerCase().match("tokyo")){
                    sReply = "What is the Capital of Russia?";
                    this.stateCur = GameState.RUSSIA;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.JAPAN;
    
                }
                break;
            case GameState.RUSSIA:
                if(sInput.toLowerCase().match("moscow")){
                    sReply = "What is the Capital of Spain?";
                    this.stateCur = GameState.SPAIN;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.RUSSIA;
    
                }
                break;
            case GameState.SPAIN:
                if(sInput.toLowerCase().match("madrid")){
                    sReply = "What is the Capital of Brazil?";
                    this.stateCur = GameState.BRAZIL;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.SPAIN;
    
                }
                break;
             case GameState.BRAZIL:
                if(sInput.toLowerCase().match("brasilia")){
                    sReply = "What is the Capital of Afghanistan?";
                    this.stateCur = GameState.AFGHANISTAN;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.BRAZIL;
    
                }
                break;
                case GameState.AFGHANISTAN:
                if(sInput.toLowerCase().match("kabul")){
                    sReply = "What is the Capital of France?";
                    this.stateCur = GameState.FRANCE;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.AFGHANISTAN;
    
                }
                break;
                case GameState.FRANCE:
                if(sInput.toLowerCase().match("paris")){
                    sReply = "What is the Capital of United Kingdom?";
                    this.stateCur = GameState.UNITEDKINGDOM;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.FRANCE;
    
                }
                break;
                case GameState.UNITEDKINGDOM:
                if(sInput.toLowerCase().match("london")){
                    sReply = "What is the Capital of Italy?";
                    this.stateCur = GameState.ITALY;

                }else{
                    sReply = "Try Agian..!!";
                    this.stateCur = GameState.UNITEDKINGDOM;
    
                }
                break;
            case GameState.ITALY:
                if(sInput.toLowerCase().match("rome")){
                    sReply = "Congratulations YOU WON..!!!";
                    this.stateCur = GameState.WELCOMING;

                }else{
                    sReply = "Try Agian!!";
                    this.stateCur = GameState.ITALY;
    
                }
                break;
        }
        return([sReply]);
    }
}