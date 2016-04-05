"use strict";
const Constants = require ("../../../Constants");
const DeathgripBase = require("../setCED/Deathgrip");

class Deathgrip extends DeathgripBase {
  constructor(game) {
    super(game, "Deathgrip", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Deathgrip;
