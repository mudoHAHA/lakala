function Move(obj , json , fn)
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json)
		{
			var iCur = 0;
			if(attr == 'opacity')
			{
				iCur = parseInt((parseFloat(obj.css(attr)))*100);
			}
			else
			{
				iCur = parseInt(obj.css(attr));
			}
		}

		if(iCur != json[attr])
		{
			bStop = false;
		}

		var iSpeed = (json[attr] - iCur)/8;
		iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

		var change = iCur+iSpeed;

		if(attr == 'opacity')
		{
			obj.css('filter','alpha(opacity:'+change+')');
			obj.css('opacity',change/100);
		}
		else
		{
			obj.css(attr,''+change+'px');
		}

		if(bStop)
		{
			clearInterval(obj.timer);
			if(fn)
			{
				fn();
			}
		}
	},30);
}