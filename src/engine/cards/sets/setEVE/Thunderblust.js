"use strict";
const Constants = require ("../../../Constants");
const ThunderblustBase = require("../setMM2/Thunderblust");

class Thunderblust extends ThunderblustBase {
  constructor (game) {
    super(game, "Thunderblust", "Eventide", "EVE");
  }
}

module.exports = Thunderblust;
