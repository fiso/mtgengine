"use strict";
const Constants = require ("../../../Constants");
const KabiraVindicatorBase = require("../setDDG/KabiraVindicator");

class KabiraVindicator extends KabiraVindicatorBase {
  constructor(game) {
    super(game, "Kabira Vindicator", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KabiraVindicator;
