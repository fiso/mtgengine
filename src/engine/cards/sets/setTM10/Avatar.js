"use strict";
const Constants = require ("../../../Constants");
const AvatarBase = require("../setTM19/Avatar");

class Avatar extends AvatarBase {
  constructor (game) {
    super(game, "Avatar", "Magic 2010 Tokens", "TM10");
  }
}

module.exports = Avatar;
