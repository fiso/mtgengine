"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CullingMark extends Card {
  constructor(game) {
    super(game, "Culling Mark", "Born of the Gods", "BNG");
  }
}

module.exports = CullingMark;
