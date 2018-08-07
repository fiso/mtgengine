"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Halfdane extends UnimplementedCard {
  constructor (game) {
    super(game, "Halfdane", "Masters Edition III", "ME3");
  }
}

module.exports = Halfdane;
