"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirranSpy extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirran Spy", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MirranSpy;
