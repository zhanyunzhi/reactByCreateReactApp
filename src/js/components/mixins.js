/**
 * Created by ZYZ on 2017/7/25.
 */
const MixinLog = {
    componentDidMount(){
      this.log("MixinLog componentDidMount");
    },
    log(str){
        console.log(str);
    }
};

export default MixinLog;