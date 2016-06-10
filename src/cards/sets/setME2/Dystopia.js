"use strict";
const Constants = require ("../../../Constants");
const DystopiaBase = require("../setALL/Dystopia");

class Dystopia extends DystopiaBase {
  constructor (game) {
    super(game, "Dystopia", "Masters Edition II", "ME2");
  }
}

module.exports = Dystopia;
