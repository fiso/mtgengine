"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Censor extends UnimplementedCard {
  constructor (game) {
    super(game, "Censor", "Amonkhet", "AKH");
  }
}

module.exports = Censor;
