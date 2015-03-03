/**
 * Original: https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget
 * Modify by tsl0922@gmail.com 
 */
$(function(){
	$('.github-widget').each(function(){
		var $container = $(this);
		var repo_name = $container.data('repo');
		var issu = $container.data('issu');
		$.getJSON("https://api.github.com/repos/"+repo_name,function(result){
		
		var html_head='<div class="am-panel am-panel-default"><div class="am-panel-hd"><span class="am-icon-github"></span><a class="owner" href="'+result.owner.html_url+'" target="_blank">'+result.owner.login+'</a> / <a class="repo" href="https://github.com/'+repo_name+'" >'+result.name+'</a></div><div class="am-panel-bd"><p class="description">'+result.description+'— <a href="https://github.com/'+repo_name+'#readme" target="_blank" class="am-icon-external-link">More...</a>						<br><span></span><a class="am-icon-link" href="'+result.homepage+'" target="_blank">'+result.homepage+'</a></p><hr><ol style="font-size:14px;" class="isu_'+issu+'">';
		var html_footer='</ol></div><footer class="am-panel-footer"><a href="https://github.com/'+repo_name+'/tree/master" target="_blank"><strong>master</strong>分支</a>代码最近更新：'+result.updated_at.substr(0,10)+'<a class="am-btn am-btn-success am-btn-xs am-fr" href="https://github.com/'+repo_name+'/zipball/master">下载zip</a></footer></div>';
		
		$(".github_"+issu).html(html_head+html_footer);
		
		var li_isus="";
		if(result.has_issues && result.open_issues > 0) {
			$.getJSON('https://api.github.com/repos/' + repo_name + "/issues?state=open&per_page=5&page=1&sort=updated",function(isu){
	
				for(var i=0;i<isu.length;i++) {
				  var html_isus='<li><a href="'+isu[i].html_url+'" target="_blank">'+isu[i].title+'</a>by <a href="'+isu[i].user.html_url+'" target="_blank">'+isu[i].user.login+'</a>&nbsp;&nbsp;<em style="font-size: 8pt;font-family: Candara,arial;color: #666;-webkit-text-size-adjust: none;">'+isu[i].updated_at.substr(0,10)+'</em></li>';
				  li_isus=li_isus+html_isus;
				  $(".isu_"+issu).append(html_isus);
				}
				
			});
		}

		

		});
	});

});