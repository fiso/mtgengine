"use strict";
const Constants = require ("../../../Constants");
const DeathgripBase = require("../setME4/Deathgrip");

class Deathgrip extends DeathgripBase {
  constructor (game) {
    super(game, "Deathgrip", "Limited Edition Beta", "LEB");
  }
}

module.exports = Deathgrip;
