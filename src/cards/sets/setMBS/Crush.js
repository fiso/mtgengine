"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crush extends UnimplementedCard {
  constructor(game) {
    super(game, "Crush", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Crush;
