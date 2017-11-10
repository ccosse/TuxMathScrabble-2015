/**********************************************************

    Author          :Charles Brissac

    Email           :cdbrissac_at_gmail_dot_com

***********************************************************/
var Timer=function(){
	var me={};

	me.t0=new Date().getTime();

	me.reset=function(){
		me.t0=new Date().getTime();
	}

	me.elapsed=function(){
		return (new Date().getTime()-me.t0)/1000.;
	}

	me.time=function(){
		return new Date().getTime();
	}

	return me;
}
