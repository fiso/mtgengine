"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillShot extends UnimplementedCard {
  constructor (game) {
    super(game, "Kill Shot", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KillShot;
