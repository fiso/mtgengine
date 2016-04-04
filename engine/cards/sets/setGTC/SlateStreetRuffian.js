"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlateStreetRuffianBase = require("../setDDM/SlateStreetRuffian.js");

class SlateStreetRuffian extends SlateStreetRuffianBase {
  constructor(game) {
    super(game, "Slate Street Ruffian", "Gatecrash", "GTC");
  }
}

module.exports = SlateStreetRuffian;
