"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KoboldsofKherKeepBase = require("../setLEG/KoboldsofKherKeep.js");

class KoboldsofKherKeep extends KoboldsofKherKeepBase {
  constructor(game) {
    super(game, "Kobolds of Kher Keep", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldsofKherKeep;
