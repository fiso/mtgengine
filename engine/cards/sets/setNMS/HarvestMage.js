"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarvestMage extends Card {
  constructor(game) {
    super(game, "Harvest Mage", "Nemesis", "NMS");
  }
}

module.exports = HarvestMage;
