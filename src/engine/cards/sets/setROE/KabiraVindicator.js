"use strict";
const Constants = require ("../../../Constants");
const KabiraVindicatorBase = require("../setDDP/KabiraVindicator");

class KabiraVindicator extends KabiraVindicatorBase {
  constructor (game) {
    super(game, "Kabira Vindicator", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KabiraVindicator;
