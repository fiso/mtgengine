"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodCrypt extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Crypt", "Dissension", "DIS");
  }
}

module.exports = BloodCrypt;
