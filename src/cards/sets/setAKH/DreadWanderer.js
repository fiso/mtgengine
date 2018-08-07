"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Wanderer", "Amonkhet", "AKH");
  }
}

module.exports = DreadWanderer;
