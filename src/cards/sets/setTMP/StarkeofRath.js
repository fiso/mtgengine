"use strict";
const Constants = require ("../../../Constants");
const StarkeofRathBase = require("../setTPR/StarkeofRath");

class StarkeofRath extends StarkeofRathBase {
  constructor (game) {
    super(game, "Starke of Rath", "Tempest", "TMP");
  }
}

module.exports = StarkeofRath;
