"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KinsbaileSkirmisherBase = require("../setDDO/KinsbaileSkirmisher.js");

class KinsbaileSkirmisher extends KinsbaileSkirmisherBase {
  constructor(game) {
    super(game, "Kinsbaile Skirmisher", "Lorwyn", "LRW");
  }
}

module.exports = KinsbaileSkirmisher;
