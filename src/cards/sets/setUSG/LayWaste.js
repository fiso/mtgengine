"use strict";
const Constants = require ("../../../Constants");
const LayWasteBase = require("../setONS/LayWaste");

class LayWaste extends LayWasteBase {
  constructor (game) {
    super(game, "Lay Waste", "Urza's Saga", "USG");
  }
}

module.exports = LayWaste;
