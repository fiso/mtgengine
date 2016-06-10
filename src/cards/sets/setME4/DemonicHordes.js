"use strict";
const Constants = require ("../../../Constants");
const DemonicHordesBase = require("../setCED/DemonicHordes");

class DemonicHordes extends DemonicHordesBase {
  constructor (game) {
    super(game, "Demonic Hordes", "Masters Edition IV", "ME4");
  }
}

module.exports = DemonicHordes;
