"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkheartSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Darkheart Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = DarkheartSliver;
