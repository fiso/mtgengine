"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OranRiefRecluseBase = require("../setDDM/OranRiefRecluse.js");

class OranRiefRecluse extends OranRiefRecluseBase {
  constructor(game) {
    super(game, "Oran-Rief Recluse", "Zendikar", "ZEN");
  }
}

module.exports = OranRiefRecluse;
