"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EidolonofBlossomsBase = require("../setJOU/EidolonofBlossoms.js");

class EidolonofBlossoms extends EidolonofBlossomsBase {
  constructor(game) {
    super(game, "Eidolon of Blossoms", "Media Inserts", "pMEI");
  }
}

module.exports = EidolonofBlossoms;
