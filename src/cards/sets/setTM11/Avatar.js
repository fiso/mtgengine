"use strict";
const Constants = require ("../../../Constants");
const AvatarBase = require("../setTM19/Avatar");

class Avatar extends AvatarBase {
  constructor (game) {
    super(game, "Avatar", "Magic 2011 Tokens", "TM11");
  }
}

module.exports = Avatar;
