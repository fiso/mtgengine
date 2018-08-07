"use strict";
const Constants = require ("../../../Constants");
const NecroskitterBase = require("../setMM2/Necroskitter");

class Necroskitter extends NecroskitterBase {
  constructor (game) {
    super(game, "Necroskitter", "Eventide", "EVE");
  }
}

module.exports = Necroskitter;
