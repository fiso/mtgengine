"use strict";
const Constants = require ("../../../Constants");
const DemonicAttorneyBase = require("../setCED/DemonicAttorney");

class DemonicAttorney extends DemonicAttorneyBase {
  constructor (game) {
    super(game, "Demonic Attorney", "Revised Edition", "3ED");
  }
}

module.exports = DemonicAttorney;
