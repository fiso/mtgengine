"use strict";
const Constants = require ("../../../Constants");
const DualShotBase = require("../setXLN/DualShot");

class DualShot extends DualShotBase {
  constructor (game) {
    super(game, "Dual Shot", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DualShot;
