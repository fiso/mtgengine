"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningSurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Surge", "Judgment", "JUD");
  }
}

module.exports = LightningSurge;
