"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrybSpritesBase = require("../setBRB/ScrybSprites.js");

class ScrybSprites extends ScrybSpritesBase {
  constructor(game) {
    super(game, "Scryb Sprites", "Collector's Edition", "CED");
  }
}

module.exports = ScrybSprites;
