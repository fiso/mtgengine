"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageKnuckleblade extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Knuckleblade", "Khans of Tarkir", "KTK");
  }
}

module.exports = SavageKnuckleblade;
