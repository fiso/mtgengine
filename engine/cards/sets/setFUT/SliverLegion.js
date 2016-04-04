"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SliverLegion extends Card {
  constructor(game) {
    super(game, "Sliver Legion", "Future Sight", "FUT");
  }
}

module.exports = SliverLegion;
