"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TomorrowAzamisFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Tomorrow, Azami's Familiar", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TomorrowAzamisFamiliar;
