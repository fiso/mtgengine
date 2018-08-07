"use strict";
const Constants = require ("../../../Constants");
const VeteranArmorerBase = require("../setMMA/VeteranArmorer");

class VeteranArmorer extends VeteranArmorerBase {
  constructor (game) {
    super(game, "Veteran Armorer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VeteranArmorer;
