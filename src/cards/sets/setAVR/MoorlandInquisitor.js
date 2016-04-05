"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorlandInquisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Moorland Inquisitor", "Avacyn Restored", "AVR");
  }
}

module.exports = MoorlandInquisitor;
