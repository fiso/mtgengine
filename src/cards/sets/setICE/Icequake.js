"use strict";
const Constants = require ("../../../Constants");
const IcequakeBase = require("../setME2/Icequake");

class Icequake extends IcequakeBase {
  constructor (game) {
    super(game, "Icequake", "Ice Age", "ICE");
  }
}

module.exports = Icequake;
