"use strict";
const Constants = require ("../../../Constants");
const NissasJudgmentBase = require("../setDDU/NissasJudgment");

class NissasJudgment extends NissasJudgmentBase {
  constructor (game) {
    super(game, "Nissa's Judgment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NissasJudgment;
