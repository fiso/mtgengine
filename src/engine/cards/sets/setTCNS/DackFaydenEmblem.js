"use strict";
const Constants = require ("../../../Constants");
const DackFaydenEmblemBase = require("../setTEMA/DackFaydenEmblem");

class DackFaydenEmblem extends DackFaydenEmblemBase {
  constructor (game) {
    super(game, "Dack Fayden Emblem", "Conspiracy Tokens", "TCNS");
  }
}

module.exports = DackFaydenEmblem;
