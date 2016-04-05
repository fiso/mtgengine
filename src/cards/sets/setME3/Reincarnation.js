"use strict";
const Constants = require ("../../../Constants");
const ReincarnationBase = require("../setC13/Reincarnation");

class Reincarnation extends ReincarnationBase {
  constructor(game) {
    super(game, "Reincarnation", "Masters Edition III", "ME3");
  }
}

module.exports = Reincarnation;
