"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChooseYourDemise extends UnimplementedCard {
  constructor (game) {
    super(game, "Choose Your Demise", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ChooseYourDemise;
