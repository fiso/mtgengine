"use strict";
const Constants = require ("../../../Constants");
const RebukeBase = require("../setDDQ/Rebuke");

class Rebuke extends RebukeBase {
  constructor (game) {
    super(game, "Rebuke", "Innistrad", "ISD");
  }
}

module.exports = Rebuke;
