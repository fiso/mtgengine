"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OwlFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Owl Familiar", "Masters Edition IV", "ME4");
  }
}

module.exports = OwlFamiliar;
