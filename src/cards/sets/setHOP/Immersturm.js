"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Immersturm extends UnimplementedCard {
  constructor (game) {
    super(game, "Immersturm", "Planechase", "HOP");
  }
}

module.exports = Immersturm;
