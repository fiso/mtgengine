"use strict";
const Constants = require ("../../../Constants");
const AbbotofKeralKeepBase = require("../setPORI/AbbotofKeralKeep");

class AbbotofKeralKeep extends AbbotofKeralKeepBase {
  constructor (game) {
    super(game, "Abbot of Keral Keep", "Magic Online Promos", "PRM");
  }
}

module.exports = AbbotofKeralKeep;
