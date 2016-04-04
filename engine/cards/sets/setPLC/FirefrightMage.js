"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FirefrightMage extends Card {
  constructor(game) {
    super(game, "Firefright Mage", "Planar Chaos", "PLC");
  }
}

module.exports = FirefrightMage;
