"use strict";
const Constants = require ("../../../Constants");
const FumeSpitterBase = require("../setTD2/FumeSpitter");

class FumeSpitter extends FumeSpitterBase {
  constructor (game) {
    super(game, "Fume Spitter", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FumeSpitter;
