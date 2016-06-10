"use strict";
const Constants = require ("../../../Constants");
const LilianasReaverBase = require("../setC14/LilianasReaver");

class LilianasReaver extends LilianasReaverBase {
  constructor (game) {
    super(game, "Liliana's Reaver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LilianasReaver;
