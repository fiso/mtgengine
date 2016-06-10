"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MycosynthFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Mycosynth Fiend", "New Phyrexia", "NPH");
  }
}

module.exports = MycosynthFiend;
