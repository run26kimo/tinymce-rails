(function() {
	tinymce.PluginManager.requireLangPack('youtube');
	tinymce.create('tinymce.plugins.YoutubePlugin', {
		init : function(ed, url) {
			ed.addCommand('mceYoutube', function() {
				ed.windowManager.open({
					file : url + '/youtube.htm',
					width : 320 + parseInt(ed.getLang('example.delta_width', 0)),
					height : 120 + parseInt(ed.getLang('example.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url,
					some_custom_arg : 'custom arg'
				})
			});
			ed.addButton('youtube', {
				title : 'youtube.desc',
				cmd : 'mceYoutube',
				image : url + '/img/youtube.gif'
			});
			ed.onNodeChange.add(function(ed, cm, n) {
				var active = false;
				if(n.nodeName == 'IMG') {
					try {
						var src = n.attributes["src"].value;
						var alt = n.attributes["alt"].value;
						var regexRes = src.match("vi/([^&#]*)/0.jpg");
						active = regexRes[1] === alt
					} catch (err) {
					}
				}
				cm.setActive('youtube', active)
			})
		},
		createControl : function(n, cm) {
			return null
		},
		getInfo : function() {
			return {
				longname : 'Youtube plugin',
				author : 'travelogie.com',
				authorurl : 'http://travelogie.com',
				infourl : 'http://travelogie.com/blog',
				version : "1.0"
			}
		}
	});
	tinymce.PluginManager.add('youtube', tinymce.plugins.YoutubePlugin)
})(); 