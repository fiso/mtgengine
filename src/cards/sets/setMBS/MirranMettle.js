"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirranMettle extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirran Mettle", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MirranMettle;
