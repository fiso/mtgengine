"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RepentantBlacksmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Repentant Blacksmith", "Arabian Nights", "ARN");
  }
}

module.exports = RepentantBlacksmith;
