"use strict";
const Constants = require ("../../../Constants");
const ReincarnationBase = require("../setC13/Reincarnation");

class Reincarnation extends ReincarnationBase {
  constructor(game) {
    super(game, "Reincarnation", "Legends", "LEG");
  }
}

module.exports = Reincarnation;
