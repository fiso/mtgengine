"use strict";
const Constants = require ("../../../Constants");
const GodPharaohsGiftBase = require("../setHOU/GodPharaohsGift");

class GodPharaohsGift extends GodPharaohsGiftBase {
  constructor (game) {
    super(game, "God-Pharaoh's Gift", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = GodPharaohsGift;
