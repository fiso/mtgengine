"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordoftheAccursed extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord of the Accursed", "Amonkhet", "AKH");
  }
}

module.exports = LordoftheAccursed;
