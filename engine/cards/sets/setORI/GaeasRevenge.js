"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasRevengeBase = require("../setM11/GaeasRevenge.js");

class GaeasRevenge extends GaeasRevengeBase {
  constructor(game) {
    super(game, "Gaea's Revenge", "Magic Origins", "ORI");
  }
}

module.exports = GaeasRevenge;
