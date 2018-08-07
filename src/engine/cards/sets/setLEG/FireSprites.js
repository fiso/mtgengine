"use strict";
const Constants = require ("../../../Constants");
const FireSpritesBase = require("../setME3/FireSprites");

class FireSprites extends FireSpritesBase {
  constructor (game) {
    super(game, "Fire Sprites", "Legends", "LEG");
  }
}

module.exports = FireSprites;
