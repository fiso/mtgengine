"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fruition extends UnimplementedCard {
  constructor (game) {
    super(game, "Fruition", "Portal", "POR");
  }
}

module.exports = Fruition;
