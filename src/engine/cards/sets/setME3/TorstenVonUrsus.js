"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorstenVonUrsus extends UnimplementedCard {
  constructor (game) {
    super(game, "Torsten Von Ursus", "Masters Edition III", "ME3");
  }
}

module.exports = TorstenVonUrsus;
