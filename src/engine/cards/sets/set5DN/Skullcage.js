"use strict";
const Constants = require ("../../../Constants");
const SkullcageBase = require("../setARC/Skullcage");

class Skullcage extends SkullcageBase {
  constructor (game) {
    super(game, "Skullcage", "Fifth Dawn", "5DN");
  }
}

module.exports = Skullcage;
