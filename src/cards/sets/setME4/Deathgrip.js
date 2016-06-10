"use strict";
const Constants = require ("../../../Constants");
const DeathgripBase = require("../setCED/Deathgrip");

class Deathgrip extends DeathgripBase {
  constructor (game) {
    super(game, "Deathgrip", "Masters Edition IV", "ME4");
  }
}

module.exports = Deathgrip;
