"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Weakstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Weakstone", "Masters Edition IV", "ME4");
  }
}

module.exports = Weakstone;
