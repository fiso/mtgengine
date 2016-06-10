"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arboria extends UnimplementedCard {
  constructor (game) {
    super(game, "Arboria", "Legends", "LEG");
  }
}

module.exports = Arboria;
