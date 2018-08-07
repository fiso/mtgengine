"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Counterintelligence extends UnimplementedCard {
  constructor (game) {
    super(game, "Counterintelligence", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Counterintelligence;
