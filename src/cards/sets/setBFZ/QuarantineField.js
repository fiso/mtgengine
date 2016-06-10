"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuarantineField extends UnimplementedCard {
  constructor (game) {
    super(game, "Quarantine Field", "Battle for Zendikar", "BFZ");
  }
}

module.exports = QuarantineField;
