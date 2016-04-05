"use strict";
const Constants = require ("../../../Constants");
const KorSkyfisherBase = require("../setDDO/KorSkyfisher");

class KorSkyfisher extends KorSkyfisherBase {
  constructor(game) {
    super(game, "Kor Skyfisher", "Zendikar", "ZEN");
  }
}

module.exports = KorSkyfisher;
