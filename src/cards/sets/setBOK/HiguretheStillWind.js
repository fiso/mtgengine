"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiguretheStillWind extends UnimplementedCard {
  constructor (game) {
    super(game, "Higure, the Still Wind", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HiguretheStillWind;
