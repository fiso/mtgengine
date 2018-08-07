"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Betrayal extends UnimplementedCard {
  constructor (game) {
    super(game, "Betrayal", "Visions", "VIS");
  }
}

module.exports = Betrayal;
