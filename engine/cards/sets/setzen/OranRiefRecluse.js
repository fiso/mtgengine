"use strict";
const Constants = require ("../../../Constants");
const OranRiefRecluseBase = require("../setDDM/OranRiefRecluse");

class OranRiefRecluse extends OranRiefRecluseBase {
  constructor(game) {
    super(game, "Oran-Rief Recluse", "Zendikar", "ZEN");
  }
}

module.exports = OranRiefRecluse;
