"use strict";
const Constants = require ("../../../Constants");
const FlyingCarpetBase = require("../setME4/FlyingCarpet");

class FlyingCarpet extends FlyingCarpetBase {
  constructor (game) {
    super(game, "Flying Carpet", "Eighth Edition", "8ED");
  }
}

module.exports = FlyingCarpet;
