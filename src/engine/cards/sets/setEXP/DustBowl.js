"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DustBowl extends UnimplementedCard {
  constructor (game) {
    super(game, "Dust Bowl", "Zendikar Expeditions", "EXP");
  }
}

module.exports = DustBowl;
