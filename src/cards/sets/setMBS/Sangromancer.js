"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sangromancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sangromancer", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Sangromancer;
