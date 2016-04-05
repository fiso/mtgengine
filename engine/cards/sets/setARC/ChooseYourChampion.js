"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChooseYourChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Choose Your Champion", "Archenemy", "ARC");
  }
}

module.exports = ChooseYourChampion;
