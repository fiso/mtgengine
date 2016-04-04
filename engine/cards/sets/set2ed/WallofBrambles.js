"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofBramblesBase = require("../setCED/WallofBrambles.js");

class WallofBrambles extends WallofBramblesBase {
  constructor(game) {
    super(game, "Wall of Brambles", "Unlimited Edition", "2ED");
  }
}

module.exports = WallofBrambles;
