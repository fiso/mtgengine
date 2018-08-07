"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedSextant extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbed Sextant", "Masters Edition II", "ME2");
  }
}

module.exports = BarbedSextant;
