"use strict";
const Constants = require ("../../../Constants");
const DemonicAttorneyBase = require("../setSUM/DemonicAttorney");

class DemonicAttorney extends DemonicAttorneyBase {
  constructor (game) {
    super(game, "Demonic Attorney", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DemonicAttorney;
