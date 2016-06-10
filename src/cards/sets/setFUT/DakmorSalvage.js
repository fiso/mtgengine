"use strict";
const Constants = require ("../../../Constants");
const DakmorSalvageBase = require("../setDDJ/DakmorSalvage");

class DakmorSalvage extends DakmorSalvageBase {
  constructor (game) {
    super(game, "Dakmor Salvage", "Future Sight", "FUT");
  }
}

module.exports = DakmorSalvage;
