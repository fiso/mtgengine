"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SternMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Stern Marshal", "Portal", "POR");
  }
}

module.exports = SternMarshal;
