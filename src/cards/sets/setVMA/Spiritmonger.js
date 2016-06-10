"use strict";
const Constants = require ("../../../Constants");
const SpiritmongerBase = require("../setAPC/Spiritmonger");

class Spiritmonger extends SpiritmongerBase {
  constructor (game) {
    super(game, "Spiritmonger", "Vintage Masters", "VMA");
  }
}

module.exports = Spiritmonger;
