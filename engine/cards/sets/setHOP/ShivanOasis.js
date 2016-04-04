"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanOasisBase = require("../setDDE/ShivanOasis.js");

class ShivanOasis extends ShivanOasisBase {
  constructor(game) {
    super(game, "Shivan Oasis", "Planechase", "HOP");
  }
}

module.exports = ShivanOasis;
