"use strict";
const Constants = require ("../../../Constants");
const DemonicAttorneyBase = require("../setCED/DemonicAttorney");

class DemonicAttorney extends DemonicAttorneyBase {
  constructor(game) {
    super(game, "Demonic Attorney", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DemonicAttorney;
