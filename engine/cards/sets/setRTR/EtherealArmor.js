"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtherealArmor extends Card {
  constructor(game) {
    super(game, "Ethereal Armor", "Return to Ravnica", "RTR");
  }
}

module.exports = EtherealArmor;
