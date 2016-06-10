"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moat extends UnimplementedCard {
  constructor (game) {
    super(game, "Moat", "Legends", "LEG");
  }
}

module.exports = Moat;
