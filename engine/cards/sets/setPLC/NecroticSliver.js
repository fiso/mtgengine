"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecroticSliver extends Card {
  constructor(game) {
    super(game, "Necrotic Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = NecroticSliver;
