"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofEssenceBase = require("../setM15/WallofEssence.js");

class WallofEssence extends WallofEssenceBase {
  constructor(game) {
    super(game, "Wall of Essence", "Stronghold", "STH");
  }
}

module.exports = WallofEssence;
