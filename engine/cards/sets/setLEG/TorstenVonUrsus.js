"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorstenVonUrsus extends UnimplementedCard {
  constructor(game) {
    super(game, "Torsten Von Ursus", "Legends", "LEG");
  }
}

module.exports = TorstenVonUrsus;
