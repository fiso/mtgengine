"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deicide extends UnimplementedCard {
  constructor(game) {
    super(game, "Deicide", "Journey into Nyx", "JOU");
  }
}

module.exports = Deicide;
