"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduSkullhunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Skullhunter", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduSkullhunter;
