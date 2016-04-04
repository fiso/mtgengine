"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorSkyfisherBase = require("../setDDO/KorSkyfisher.js");

class KorSkyfisher extends KorSkyfisherBase {
  constructor(game) {
    super(game, "Kor Skyfisher", "Media Inserts", "pMEI");
  }
}

module.exports = KorSkyfisher;
