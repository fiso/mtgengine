"use strict";
const Constants = require ("../../../Constants");
const KillShotBase = require("../setCN2/KillShot");

class KillShot extends KillShotBase {
  constructor (game) {
    super(game, "Kill Shot", "Khans of Tarkir", "KTK");
  }
}

module.exports = KillShot;
