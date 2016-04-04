"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduHateblade extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Hateblade", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduHateblade;
