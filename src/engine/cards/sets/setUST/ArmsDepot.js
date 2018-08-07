"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmsDepot extends UnimplementedCard {
  constructor (game) {
    super(game, "Arms Depot", "Unstable", "UST");
  }
}

module.exports = ArmsDepot;
