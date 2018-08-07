"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaraudersAxe extends UnimplementedCard {
  constructor (game) {
    super(game, "Marauder's Axe", "Core Set 2019", "M19");
  }
}

module.exports = MaraudersAxe;
