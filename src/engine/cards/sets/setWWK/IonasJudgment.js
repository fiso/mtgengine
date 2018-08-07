"use strict";
const Constants = require ("../../../Constants");
const IonasJudgmentBase = require("../setIMA/IonasJudgment");

class IonasJudgment extends IonasJudgmentBase {
  constructor (game) {
    super(game, "Iona's Judgment", "Worldwake", "WWK");
  }
}

module.exports = IonasJudgment;
