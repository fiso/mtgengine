"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DakmorSalvageBase = require("../setDDJ/DakmorSalvage.js");

class DakmorSalvage extends DakmorSalvageBase {
  constructor(game) {
    super(game, "Dakmor Salvage", "Future Sight", "FUT");
  }
}

module.exports = DakmorSalvage;
