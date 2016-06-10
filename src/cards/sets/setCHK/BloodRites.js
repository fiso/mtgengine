"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodRites extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Rites", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BloodRites;
