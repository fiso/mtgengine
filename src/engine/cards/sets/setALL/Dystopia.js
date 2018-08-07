"use strict";
const Constants = require ("../../../Constants");
const DystopiaBase = require("../setME2/Dystopia");

class Dystopia extends DystopiaBase {
  constructor (game) {
    super(game, "Dystopia", "Alliances", "ALL");
  }
}

module.exports = Dystopia;
