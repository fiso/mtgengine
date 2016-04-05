"use strict";
const Constants = require ("../../../Constants");
const HauntedPlateMailBase = require("../setM14/HauntedPlateMail");

class HauntedPlateMail extends HauntedPlateMailBase {
  constructor(game) {
    super(game, "Haunted Plate Mail", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HauntedPlateMail;
