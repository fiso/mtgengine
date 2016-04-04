"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrybSpritesBase = require("../setBRB/ScrybSprites.js");

class ScrybSprites extends ScrybSpritesBase {
  constructor(game) {
    super(game, "Scryb Sprites", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = ScrybSprites;
