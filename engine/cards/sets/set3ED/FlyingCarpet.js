"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlyingCarpetBase = require("../setARN/FlyingCarpet.js");

class FlyingCarpet extends FlyingCarpetBase {
  constructor(game) {
    super(game, "Flying Carpet", "Revised Edition", "3ED");
  }
}

module.exports = FlyingCarpet;
