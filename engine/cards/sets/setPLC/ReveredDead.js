"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReveredDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Revered Dead", "Planar Chaos", "PLC");
  }
}

module.exports = ReveredDead;
