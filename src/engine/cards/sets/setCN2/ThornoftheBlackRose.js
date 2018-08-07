"use strict";
const Constants = require ("../../../Constants");
const ThornoftheBlackRoseBase = require("../setPZ2/ThornoftheBlackRose");

class ThornoftheBlackRose extends ThornoftheBlackRoseBase {
  constructor (game) {
    super(game, "Thorn of the Black Rose", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ThornoftheBlackRose;
