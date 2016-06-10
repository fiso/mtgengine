"use strict";
const Constants = require ("../../../Constants");
const WirewoodHeraldBase = require("../setDD3_EVG/WirewoodHerald");

class WirewoodHerald extends WirewoodHeraldBase {
  constructor (game) {
    super(game, "Wirewood Herald", "Onslaught", "ONS");
  }
}

module.exports = WirewoodHerald;
