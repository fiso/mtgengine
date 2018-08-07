"use strict";
const Constants = require ("../../../Constants");
const AimHighBase = require("../setBBD/AimHigh");

class AimHigh extends AimHighBase {
  constructor (game) {
    super(game, "Aim High", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AimHigh;
