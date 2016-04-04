"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianasReaverBase = require("../setC14/LilianasReaver.js");

class LilianasReaver extends LilianasReaverBase {
  constructor(game) {
    super(game, "Liliana's Reaver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LilianasReaver;
