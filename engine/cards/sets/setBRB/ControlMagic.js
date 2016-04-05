"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ControlMagic extends UnimplementedCard {
  constructor(game) {
    super(game, "Control Magic", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ControlMagic;
