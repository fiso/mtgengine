"use strict";
const Constants = require ("../../../Constants");
const HauntedPlateMailBase = require("../setM15/HauntedPlateMail");

class HauntedPlateMail extends HauntedPlateMailBase {
  constructor (game) {
    super(game, "Haunted Plate Mail", "Magic 2014", "M14");
  }
}

module.exports = HauntedPlateMail;
