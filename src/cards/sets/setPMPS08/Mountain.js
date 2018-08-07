"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Magic Premiere Shop 2008", "PMPS08");
  }
}

module.exports = Mountain;
