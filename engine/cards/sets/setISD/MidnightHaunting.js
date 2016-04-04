"use strict";
const Constants = require ("../../../Constants");
const MidnightHauntingBase = require("../setC14/MidnightHaunting");

class MidnightHaunting extends MidnightHauntingBase {
  constructor(game) {
    super(game, "Midnight Haunting", "Innistrad", "ISD");
  }
}

module.exports = MidnightHaunting;
