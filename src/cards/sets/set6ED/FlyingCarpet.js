"use strict";
const Constants = require ("../../../Constants");
const FlyingCarpetBase = require("../setME4/FlyingCarpet");

class FlyingCarpet extends FlyingCarpetBase {
  constructor (game) {
    super(game, "Flying Carpet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FlyingCarpet;
