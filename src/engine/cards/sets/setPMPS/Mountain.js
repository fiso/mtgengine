"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Magic Premiere Shop 2005", "PMPS");
  }
}

module.exports = Mountain;
