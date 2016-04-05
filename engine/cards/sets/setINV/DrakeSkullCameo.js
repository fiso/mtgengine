"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrakeSkullCameo extends UnimplementedCard {
  constructor(game) {
    super(game, "Drake-Skull Cameo", "Invasion", "INV");
  }
}

module.exports = DrakeSkullCameo;
