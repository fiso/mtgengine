"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Mountain;
