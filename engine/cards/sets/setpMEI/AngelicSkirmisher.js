"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicSkirmisherBase = require("../setGTC/AngelicSkirmisher.js");

class AngelicSkirmisher extends AngelicSkirmisherBase {
  constructor(game) {
    super(game, "Angelic Skirmisher", "Media Inserts", "pMEI");
  }
}

module.exports = AngelicSkirmisher;
