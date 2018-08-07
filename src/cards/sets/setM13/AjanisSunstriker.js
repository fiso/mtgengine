"use strict";
const Constants = require ("../../../Constants");
const AjanisSunstrikerBase = require("../setCNS/AjanisSunstriker");

class AjanisSunstriker extends AjanisSunstrikerBase {
  constructor (game) {
    super(game, "Ajani's Sunstriker", "Magic 2013", "M13");
  }
}

module.exports = AjanisSunstriker;
