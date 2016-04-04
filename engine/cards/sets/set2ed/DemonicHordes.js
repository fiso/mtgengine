"use strict";
const Constants = require ("../../../Constants");
const DemonicHordesBase = require("../setCED/DemonicHordes");

class DemonicHordes extends DemonicHordesBase {
  constructor(game) {
    super(game, "Demonic Hordes", "Unlimited Edition", "2ED");
  }
}

module.exports = DemonicHordes;
