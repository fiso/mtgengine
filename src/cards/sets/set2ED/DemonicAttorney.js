"use strict";
const Constants = require ("../../../Constants");
const DemonicAttorneyBase = require("../setCED/DemonicAttorney");

class DemonicAttorney extends DemonicAttorneyBase {
  constructor (game) {
    super(game, "Demonic Attorney", "Unlimited Edition", "2ED");
  }
}

module.exports = DemonicAttorney;
