"use strict";
const Constants = require ("../../../Constants");
const WarkiteMarauderBase = require("../setPRIX/WarkiteMarauder");

class WarkiteMarauder extends WarkiteMarauderBase {
  constructor (game) {
    super(game, "Warkite Marauder", "Rivals of Ixalan", "RIX");
  }
}

module.exports = WarkiteMarauder;
