"use strict";
const Constants = require ("../../../Constants");
const RainofTearsBase = require("../set10E/RainofTears");

class RainofTears extends RainofTearsBase {
  constructor (game) {
    super(game, "Rain of Tears", "Portal", "POR");
  }
}

module.exports = RainofTears;
