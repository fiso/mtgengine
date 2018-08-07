"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arboria extends UnimplementedCard {
  constructor (game) {
    super(game, "Arboria", "Masters Edition III", "ME3");
  }
}

module.exports = Arboria;
