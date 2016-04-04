"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireSpritesBase = require("../setLEG/FireSprites.js");

class FireSprites extends FireSpritesBase {
  constructor(game) {
    super(game, "Fire Sprites", "Masters Edition III", "ME3");
  }
}

module.exports = FireSprites;
