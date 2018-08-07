"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShedWeakness extends UnimplementedCard {
  constructor (game) {
    super(game, "Shed Weakness", "Amonkhet", "AKH");
  }
}

module.exports = ShedWeakness;
