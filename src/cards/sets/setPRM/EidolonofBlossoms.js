"use strict";
const Constants = require ("../../../Constants");
const EidolonofBlossomsBase = require("../setC18/EidolonofBlossoms");

class EidolonofBlossoms extends EidolonofBlossomsBase {
  constructor (game) {
    super(game, "Eidolon of Blossoms", "Magic Online Promos", "PRM");
  }
}

module.exports = EidolonofBlossoms;
