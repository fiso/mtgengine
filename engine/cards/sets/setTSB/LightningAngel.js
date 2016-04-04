"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningAngelBase = require("../setAPC/LightningAngel.js");

class LightningAngel extends LightningAngelBase {
  constructor(game) {
    super(game, "Lightning Angel", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = LightningAngel;
