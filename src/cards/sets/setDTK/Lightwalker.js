"use strict";
const Constants = require ("../../../Constants");
const LightwalkerBase = require("../setBBD/Lightwalker");

class Lightwalker extends LightwalkerBase {
  constructor (game) {
    super(game, "Lightwalker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Lightwalker;
