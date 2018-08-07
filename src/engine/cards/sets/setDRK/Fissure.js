"use strict";
const Constants = require ("../../../Constants");
const FissureBase = require("../setMED/Fissure");

class Fissure extends FissureBase {
  constructor (game) {
    super(game, "Fissure", "The Dark", "DRK");
  }
}

module.exports = Fissure;
