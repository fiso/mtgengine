"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Magic Premiere Shop 2006", "PMPS06");
  }
}

module.exports = Mountain;
