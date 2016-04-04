"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlyingCarpetBase = require("../setARN/FlyingCarpet.js");

class FlyingCarpet extends FlyingCarpetBase {
  constructor(game) {
    super(game, "Flying Carpet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FlyingCarpet;
