"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcMage extends Card {
  constructor(game) {
    super(game, "Arc Mage", "Nemesis", "NMS");
  }
}

module.exports = ArcMage;
