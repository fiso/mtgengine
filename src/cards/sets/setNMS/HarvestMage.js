"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvest Mage", "Nemesis", "NMS");
  }
}

module.exports = HarvestMage;
