"use strict";
const Constants = require ("../../../Constants");
const HamletbackGoliathBase = require("../setCM2/HamletbackGoliath");

class HamletbackGoliath extends HamletbackGoliathBase {
  constructor (game) {
    super(game, "Hamletback Goliath", "Lorwyn", "LRW");
  }
}

module.exports = HamletbackGoliath;
