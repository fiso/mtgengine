"use strict";
const Constants = require ("../../../Constants");
const DemonicHordesBase = require("../setCED/DemonicHordes");

class DemonicHordes extends DemonicHordesBase {
  constructor (game) {
    super(game, "Demonic Hordes", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DemonicHordes;
