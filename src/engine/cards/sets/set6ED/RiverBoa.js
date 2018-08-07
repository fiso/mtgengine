"use strict";
const Constants = require ("../../../Constants");
const RiverBoaBase = require("../setDDM/RiverBoa");

class RiverBoa extends RiverBoaBase {
  constructor (game) {
    super(game, "River Boa", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RiverBoa;
