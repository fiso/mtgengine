"use strict";
const Constants = require ("../../../Constants");
const DusttoDustBase = require("../set5ED/DusttoDust");

class DusttoDust extends DusttoDustBase {
  constructor(game) {
    super(game, "Dust to Dust", "Masters Edition IV", "ME4");
  }
}

module.exports = DusttoDust;
