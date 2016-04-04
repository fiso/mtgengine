"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LayWasteBase = require("../setONS/LayWaste.js");

class LayWaste extends LayWasteBase {
  constructor(game) {
    super(game, "Lay Waste", "Urza's Saga", "USG");
  }
}

module.exports = LayWaste;
