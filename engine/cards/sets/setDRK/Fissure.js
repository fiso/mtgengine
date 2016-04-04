"use strict";
const Constants = require ("../../../Constants");
const FissureBase = require("../set4ED/Fissure");

class Fissure extends FissureBase {
  constructor(game) {
    super(game, "Fissure", "The Dark", "DRK");
  }
}

module.exports = Fissure;
