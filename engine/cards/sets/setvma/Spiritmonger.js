"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritmongerBase = require("../setAPC/Spiritmonger.js");

class Spiritmonger extends SpiritmongerBase {
  constructor(game) {
    super(game, "Spiritmonger", "Vintage Masters", "VMA");
  }
}

module.exports = Spiritmonger;
