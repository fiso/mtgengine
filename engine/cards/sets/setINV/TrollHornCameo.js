"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrollHornCameo extends UnimplementedCard {
  constructor(game) {
    super(game, "Troll-Horn Cameo", "Invasion", "INV");
  }
}

module.exports = TrollHornCameo;
