"use strict";
const Constants = require ("../../../Constants");
const BlightBase = require("../setMED/Blight");

class Blight extends BlightBase {
  constructor (game) {
    super(game, "Blight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Blight;
