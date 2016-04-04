"use strict";
const Constants = require ("../../../Constants");
const DakmorPlagueBase = require("../setME4/DakmorPlague");

class DakmorPlague extends DakmorPlagueBase {
  constructor(game) {
    super(game, "Dakmor Plague", "Starter 1999", "S99");
  }
}

module.exports = DakmorPlague;
