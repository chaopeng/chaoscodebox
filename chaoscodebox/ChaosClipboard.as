package
{
	import flash.desktop.Clipboard;
	import flash.desktop.ClipboardFormats;
	import flash.display.LoaderInfo;
	import flash.display.Sprite;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.external.ExternalInterface;
	import flash.system.Security;
	import flash.text.TextField;
	
	[SWF(width="85", height="20", backgroundColor="0xffffff")]
	public class ChaosClipboard extends Sprite
	{
		private var content:String;
		private var id:String = "";
		private var button:Sprite;		
		
		public function ChaosClipboard()
		{
			super();
			
			stage.scaleMode = StageScaleMode.NO_SCALE;
			Security.allowDomain("*");
			// import flashvar
			var flashvars:Object = LoaderInfo( this.root.loaderInfo ).parameters;
			
			id = flashvars["id"];
			var bgColorStr:String = flashvars.hasOwnProperty("bgColor")? flashvars["bgColor"]:"0xffffff";
			var fnColorStr:String = flashvars.hasOwnProperty("fnColor")? flashvars["fnColor"]:"0x000000";
			
			var bgColor:Number = parseInt(bgColorStr, 16);
			var fnColor:Number = parseInt(fnColorStr, 16);
			
			button = new Sprite();
			button.buttonMode = true;
			button.useHandCursor = true;
			// set background color
			button.graphics.beginFill(bgColor);
			button.graphics.drawRect(0, 0, Math.floor(85), Math.floor(20));
			addChild(button);
			var tf:TextField = new TextField();
			tf.text = "[复制到剪贴板]";
			tf.width = button.width;
			tf.height = button.height;
			tf.textColor = fnColor;
			button.addChild(tf);
			button.mouseChildren = false;
			
			button.addEventListener(MouseEvent.CLICK, clickHandler);
			content = ExternalInterface.call( "setContent", id );
		}
		
		private function clickHandler(e:MouseEvent):void{
			Clipboard.generalClipboard.clear();
			Clipboard.generalClipboard.setData(ClipboardFormats.TEXT_FORMAT, content);
		}
	}
}