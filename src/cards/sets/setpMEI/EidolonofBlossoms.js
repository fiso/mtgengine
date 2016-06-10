"use strict";
const Constants = require ("../../../Constants");
const EidolonofBlossomsBase = require("../setJOU/EidolonofBlossoms");

class EidolonofBlossoms extends EidolonofBlossomsBase {
  constructor (game) {
    super(game, "Eidolon of Blossoms", "Media Inserts", "pMEI");
  }
}

module.exports = EidolonofBlossoms;
