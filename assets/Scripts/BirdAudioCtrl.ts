import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdAudioCtrl')
export class BirdAudioCtrl extends Component {

    @property({type: AudioClip})
    public audioClips: AudioClip[] = [];

    @property({type: AudioSource})
    public audioSrc: AudioSource = null;

    onAudioQueue(index: number){
        let clip: AudioClip = this.audioClips[index];

        this.audioSrc.playOneShot(clip);
    }
}


