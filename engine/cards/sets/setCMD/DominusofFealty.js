"use strict";
const Constants = require ("../../../Constants");
const DominusofFealtyBase = require("../setEVE/DominusofFealty");

class DominusofFealty extends DominusofFealtyBase {
  constructor(game) {
    super(game, "Dominus of Fealty", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DominusofFealty;
