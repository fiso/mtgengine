"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CradletoGrave extends Card {
  constructor(game) {
    super(game, "Cradle to Grave", "Planar Chaos", "PLC");
  }
}

module.exports = CradletoGrave;
