var axios = require('axios');

var id = "ENTER_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id="+id+"&client_secret="+sec;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/'+username)
}

function getRepos(username){
	return axios.get('https://api.github.com/users/'+username+'/repos');
}

function getTotalStars(repos){
	return new Promise(function(resolve, reject){
		var total = repos.reduce(function(total, item){
			return total+item.stargazers_count;
		}, 0);
		resolve(total);
	})
	
}

function getPlayerData(player){
	return getRepos(player.login)
	.then(function(repo_data){
		return getTotalStars(repo_data.data);
	}).then(function(totalStars){
		return {
			followers: player.followers, 
			totalStars: totalStars
		}
	});
}

function calculateScores(players){
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]

}

var helpers = {
	getPlayersInfo: function(players){
		return axios.all(players.map(function(username){
			return getUserInfo(username);
		})).then(function(info){
			 return info.map(function(user){
				return user.data;
			});
		}).catch(function(err){
			console.warn('Error in getPlayersInfo', err);
		})
	}, 

	battle: function(players){
		var playerOneData = getPlayerData(players[0]);
		var playerTwoData = getPlayerData(players[1]);
		return axios.all([playerOneData, playerTwoData])
		.then(calculateScores)
		.catch(function(err){
			console.log("Error in battle: ", err);
		})
	}
};

module.exports = helpers;