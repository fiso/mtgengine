"use strict";
const Constants = require ("../../../Constants");
const SerraAvatarBase = require("../setC18/SerraAvatar");

class SerraAvatar extends SerraAvatarBase {
  constructor (game) {
    super(game, "Serra Avatar", "Urza's Saga", "USG");
  }
}

module.exports = SerraAvatar;
