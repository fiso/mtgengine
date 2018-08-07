"use strict";
const Constants = require ("../../../Constants");
const ImmersturmBase = require("../setPCA/Immersturm");

class Immersturm extends ImmersturmBase {
  constructor (game) {
    super(game, "Immersturm", "Planechase", "HOP");
  }
}

module.exports = Immersturm;
