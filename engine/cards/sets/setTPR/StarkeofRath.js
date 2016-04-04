"use strict";
const Constants = require ("../../../Constants");
const StarkeofRathBase = require("../setTMP/StarkeofRath");

class StarkeofRath extends StarkeofRathBase {
  constructor(game) {
    super(game, "Starke of Rath", "Tempest Remastered", "TPR");
  }
}

module.exports = StarkeofRath;
