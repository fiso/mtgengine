"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TobiasAndrion extends UnimplementedCard {
  constructor (game) {
    super(game, "Tobias Andrion", "Masters Edition III", "ME3");
  }
}

module.exports = TobiasAndrion;
