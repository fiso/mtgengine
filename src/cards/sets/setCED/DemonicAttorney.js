"use strict";
const Constants = require ("../../../Constants");
const DemonicAttorneyBase = require("../setSUM/DemonicAttorney");

class DemonicAttorney extends DemonicAttorneyBase {
  constructor (game) {
    super(game, "Demonic Attorney", "Collectors’ Edition", "CED");
  }
}

module.exports = DemonicAttorney;
