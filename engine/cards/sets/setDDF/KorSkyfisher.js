"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorSkyfisherBase = require("../setDDO/KorSkyfisher.js");

class KorSkyfisher extends KorSkyfisherBase {
  constructor(game) {
    super(game, "Kor Skyfisher", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KorSkyfisher;
