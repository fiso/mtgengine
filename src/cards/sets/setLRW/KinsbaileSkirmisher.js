"use strict";
const Constants = require ("../../../Constants");
const KinsbaileSkirmisherBase = require("../setDDO/KinsbaileSkirmisher");

class KinsbaileSkirmisher extends KinsbaileSkirmisherBase {
  constructor (game) {
    super(game, "Kinsbaile Skirmisher", "Lorwyn", "LRW");
  }
}

module.exports = KinsbaileSkirmisher;
