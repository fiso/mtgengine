"use strict";
const Constants = require ("../../../Constants");
const ShipwreckSingerBase = require("../setCN2/ShipwreckSinger");

class ShipwreckSinger extends ShipwreckSingerBase {
  constructor (game) {
    super(game, "Shipwreck Singer", "Theros", "THS");
  }
}

module.exports = ShipwreckSinger;
