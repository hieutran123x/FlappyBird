import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Result')
export class Result extends Component {
    @property({type: Label})
    public scoreLabel: Label;

    @property({type: Label})
    public topScore: Label;

    @property({type: Label})
    public resultEnd: Label;

    maxScore: number = 0;
    currentScore: number = 0;

    updateScore(score: number){
        this.currentScore = score;

        this.scoreLabel.string = ('' + this.currentScore);
    }

    resetScore(){
        this.updateScore(0);

        this.hideResult();

        this.scoreLabel.string = ('' + this.currentScore);

    }

    addScore(){
        this.updateScore(this.currentScore + 1);

    }

    showResult(){
        this.maxScore = Math.max(this.maxScore, this.currentScore);

        this.topScore.string = ('High score:' + this.maxScore);
        this.topScore.node.active = true;

        this.resultEnd.node.active = false;
    }

    hideResult(){
        this.topScore.node.active = false;
        this.resultEnd.node.active = false;
    }
}

    


