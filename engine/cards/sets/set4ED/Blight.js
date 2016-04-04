"use strict";
const Constants = require ("../../../Constants");
const BlightBase = require("../set6ED/Blight");

class Blight extends BlightBase {
  constructor(game) {
    super(game, "Blight", "Fourth Edition", "4ED");
  }
}

module.exports = Blight;
