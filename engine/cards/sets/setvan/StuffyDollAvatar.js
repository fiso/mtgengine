"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StuffyDollAvatar extends Card {
  constructor(game) {
    super(game, "Stuffy Doll Avatar", "Vanguard", "VAN");
  }
}

module.exports = StuffyDollAvatar;
