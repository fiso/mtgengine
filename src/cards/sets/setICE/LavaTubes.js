"use strict";
const Constants = require ("../../../Constants");
const LavaTubesBase = require("../setPTC/LavaTubes");

class LavaTubes extends LavaTubesBase {
  constructor (game) {
    super(game, "Lava Tubes", "Ice Age", "ICE");
  }
}

module.exports = LavaTubes;
