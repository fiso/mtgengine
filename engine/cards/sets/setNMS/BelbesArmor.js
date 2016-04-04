"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelbesArmor extends Card {
  constructor(game) {
    super(game, "Belbe's Armor", "Nemesis", "NMS");
  }
}

module.exports = BelbesArmor;
