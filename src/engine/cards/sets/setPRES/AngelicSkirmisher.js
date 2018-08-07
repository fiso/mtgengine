"use strict";
const Constants = require ("../../../Constants");
const AngelicSkirmisherBase = require("../setGTC/AngelicSkirmisher");

class AngelicSkirmisher extends AngelicSkirmisherBase {
  constructor (game) {
    super(game, "Angelic Skirmisher", "Resale Promos", "PRES");
  }
}

module.exports = AngelicSkirmisher;
