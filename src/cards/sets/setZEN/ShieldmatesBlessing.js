"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldmatesBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Shieldmate's Blessing", "Zendikar", "ZEN");
  }
}

module.exports = ShieldmatesBlessing;
