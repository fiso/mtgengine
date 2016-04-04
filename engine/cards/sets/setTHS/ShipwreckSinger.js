"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShipwreckSinger extends Card {
  constructor(game) {
    super(game, "Shipwreck Singer", "Theros", "THS");
  }
}

module.exports = ShipwreckSinger;
