"use strict";
const Constants = require ("../../../Constants");
const AvatarBase = require("../setTM19/Avatar");

class Avatar extends AvatarBase {
  constructor (game) {
    super(game, "Avatar", "Lorwyn Tokens", "TLRW");
  }
}

module.exports = Avatar;
