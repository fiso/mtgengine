"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonicHordesBase = require("../setCED/DemonicHordes.js");

class DemonicHordes extends DemonicHordesBase {
  constructor(game) {
    super(game, "Demonic Hordes", "International Collector's Edition", "CEI");
  }
}

module.exports = DemonicHordes;
