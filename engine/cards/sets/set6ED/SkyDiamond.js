"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyDiamond extends Card {
  constructor(game) {
    super(game, "Sky Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SkyDiamond;
