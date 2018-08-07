"use strict";
const Constants = require ("../../../Constants");
const KorSkyfisherBase = require("../setMM3/KorSkyfisher");

class KorSkyfisher extends KorSkyfisherBase {
  constructor (game) {
    super(game, "Kor Skyfisher", "Zendikar", "ZEN");
  }
}

module.exports = KorSkyfisher;
