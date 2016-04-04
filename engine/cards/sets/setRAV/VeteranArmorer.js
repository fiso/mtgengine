"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VeteranArmorerBase = require("../setMMA/VeteranArmorer.js");

class VeteranArmorer extends VeteranArmorerBase {
  constructor(game) {
    super(game, "Veteran Armorer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VeteranArmorer;
