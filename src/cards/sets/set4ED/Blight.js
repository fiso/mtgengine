"use strict";
const Constants = require ("../../../Constants");
const BlightBase = require("../setMED/Blight");

class Blight extends BlightBase {
  constructor (game) {
    super(game, "Blight", "Fourth Edition", "4ED");
  }
}

module.exports = Blight;
