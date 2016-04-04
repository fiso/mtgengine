"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonicAttorneyBase = require("../setCED/DemonicAttorney.js");

class DemonicAttorney extends DemonicAttorneyBase {
  constructor(game) {
    super(game, "Demonic Attorney", "International Collector's Edition", "CEI");
  }
}

module.exports = DemonicAttorney;
