"use strict";
const Constants = require ("../../../Constants");
const KoboldsofKherKeepBase = require("../setTA25/KoboldsofKherKeep");

class KoboldsofKherKeep extends KoboldsofKherKeepBase {
  constructor (game) {
    super(game, "Kobolds of Kher Keep", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldsofKherKeep;
