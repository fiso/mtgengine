"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CauterySliver extends Card {
  constructor(game) {
    super(game, "Cautery Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = CauterySliver;
