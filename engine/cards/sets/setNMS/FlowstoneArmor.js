"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowstoneArmor extends Card {
  constructor(game) {
    super(game, "Flowstone Armor", "Nemesis", "NMS");
  }
}

module.exports = FlowstoneArmor;
