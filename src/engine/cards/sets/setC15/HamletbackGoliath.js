"use strict";
const Constants = require ("../../../Constants");
const HamletbackGoliathBase = require("../setCM2/HamletbackGoliath");

class HamletbackGoliath extends HamletbackGoliathBase {
  constructor (game) {
    super(game, "Hamletback Goliath", "Commander 2015", "C15");
  }
}

module.exports = HamletbackGoliath;
