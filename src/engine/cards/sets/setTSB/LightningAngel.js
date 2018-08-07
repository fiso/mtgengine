"use strict";
const Constants = require ("../../../Constants");
const LightningAngelBase = require("../setV15/LightningAngel");

class LightningAngel extends LightningAngelBase {
  constructor (game) {
    super(game, "Lightning Angel", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = LightningAngel;
