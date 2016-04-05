"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorrifyingRevelation extends UnimplementedCard {
  constructor(game) {
    super(game, "Horrifying Revelation", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HorrifyingRevelation;
