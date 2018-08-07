"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuarryHauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Quarry Hauler", "Amonkhet", "AKH");
  }
}

module.exports = QuarryHauler;
