"use strict";
const Constants = require ("../../../Constants");
const FlyingCarpetBase = require("../setARN/FlyingCarpet");

class FlyingCarpet extends FlyingCarpetBase {
  constructor(game) {
    super(game, "Flying Carpet", "Masters Edition IV", "ME4");
  }
}

module.exports = FlyingCarpet;
