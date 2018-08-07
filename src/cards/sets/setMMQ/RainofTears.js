"use strict";
const Constants = require ("../../../Constants");
const RainofTearsBase = require("../set10E/RainofTears");

class RainofTears extends RainofTearsBase {
  constructor (game) {
    super(game, "Rain of Tears", "Mercadian Masques", "MMQ");
  }
}

module.exports = RainofTears;
