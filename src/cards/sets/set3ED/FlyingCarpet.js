"use strict";
const Constants = require ("../../../Constants");
const FlyingCarpetBase = require("../setARN/FlyingCarpet");

class FlyingCarpet extends FlyingCarpetBase {
  constructor (game) {
    super(game, "Flying Carpet", "Revised Edition", "3ED");
  }
}

module.exports = FlyingCarpet;
