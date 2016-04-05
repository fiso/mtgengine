"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exorcist extends UnimplementedCard {
  constructor(game) {
    super(game, "Exorcist", "Masters Edition III", "ME3");
  }
}

module.exports = Exorcist;
