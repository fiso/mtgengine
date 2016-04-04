"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivsEmbraceBase = require("../setDDG/ShivsEmbrace.js");

class ShivsEmbrace extends ShivsEmbraceBase {
  constructor(game) {
    super(game, "Shiv's Embrace", "Magic 2011", "M11");
  }
}

module.exports = ShivsEmbrace;
