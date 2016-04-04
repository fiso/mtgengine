"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StarlitAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Starlit Angel", "Portal", "POR");
  }
}

module.exports = StarlitAngel;
