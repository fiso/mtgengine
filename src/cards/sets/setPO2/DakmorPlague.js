"use strict";
const Constants = require ("../../../Constants");
const DakmorPlagueBase = require("../setME4/DakmorPlague");

class DakmorPlague extends DakmorPlagueBase {
  constructor (game) {
    super(game, "Dakmor Plague", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorPlague;
