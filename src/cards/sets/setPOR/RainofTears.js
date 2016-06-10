"use strict";
const Constants = require ("../../../Constants");
const RainofTearsBase = require("../setMMQ/RainofTears");

class RainofTears extends RainofTearsBase {
  constructor (game) {
    super(game, "Rain of Tears", "Portal", "POR");
  }
}

module.exports = RainofTears;
