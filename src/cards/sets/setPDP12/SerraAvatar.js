"use strict";
const Constants = require ("../../../Constants");
const SerraAvatarBase = require("../setC18/SerraAvatar");

class SerraAvatar extends SerraAvatarBase {
  constructor (game) {
    super(game, "Serra Avatar", "Duels of the Planeswalkers Promos 2012", "PDP12");
  }
}

module.exports = SerraAvatar;
