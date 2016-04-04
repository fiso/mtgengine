"use strict";
const Constants = require ("../../../Constants");
const LightningAngelBase = require("../setAPC/LightningAngel");

class LightningAngel extends LightningAngelBase {
  constructor(game) {
    super(game, "Lightning Angel", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = LightningAngel;
