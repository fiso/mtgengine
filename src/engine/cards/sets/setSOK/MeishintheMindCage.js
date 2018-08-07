"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeishintheMindCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Meishin, the Mind Cage", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MeishintheMindCage;
