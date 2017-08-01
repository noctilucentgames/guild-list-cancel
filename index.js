module.exports = function guildListCancel(dispatch) {
    dispatch.hook('S_UPDATE_GUILD_MEMBER', 1, event =>{
        return false;
    });
}