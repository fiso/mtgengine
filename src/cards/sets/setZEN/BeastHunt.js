"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Beast Hunt", "Zendikar", "ZEN");
  }
}

module.exports = BeastHunt;
