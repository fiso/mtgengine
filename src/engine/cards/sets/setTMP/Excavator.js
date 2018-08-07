"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excavator extends UnimplementedCard {
  constructor (game) {
    super(game, "Excavator", "Tempest", "TMP");
  }
}

module.exports = Excavator;
