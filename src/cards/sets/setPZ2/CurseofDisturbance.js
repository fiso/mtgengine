"use strict";
const Constants = require ("../../../Constants");
const CurseofDisturbanceBase = require("../setC17/CurseofDisturbance");

class CurseofDisturbance extends CurseofDisturbanceBase {
  constructor (game) {
    super(game, "Curse of Disturbance", "You Make the Cube", "PZ2");
  }
}

module.exports = CurseofDisturbance;
