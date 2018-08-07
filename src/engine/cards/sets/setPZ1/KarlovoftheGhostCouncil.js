"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarlovoftheGhostCouncil extends UnimplementedCard {
  constructor (game) {
    super(game, "Karlov of the Ghost Council", "Legendary Cube", "PZ1");
  }
}

module.exports = KarlovoftheGhostCouncil;
