"use strict";
const Constants = require ("../../../Constants");
const DemonicHordesBase = require("../setCED/DemonicHordes");

class DemonicHordes extends DemonicHordesBase {
  constructor (game) {
    super(game, "Demonic Hordes", "Revised Edition", "3ED");
  }
}

module.exports = DemonicHordes;
