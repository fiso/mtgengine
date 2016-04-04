"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldmatesBlessing extends Card {
  constructor(game) {
    super(game, "Shieldmate's Blessing", "Zendikar", "ZEN");
  }
}

module.exports = ShieldmatesBlessing;
