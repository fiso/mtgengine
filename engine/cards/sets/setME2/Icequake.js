"use strict";
const Constants = require ("../../../Constants");
const IcequakeBase = require("../setICE/Icequake");

class Icequake extends IcequakeBase {
  constructor(game) {
    super(game, "Icequake", "Masters Edition II", "ME2");
  }
}

module.exports = Icequake;
