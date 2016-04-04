"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RebukeBase = require("../setDDQ/Rebuke.js");

class Rebuke extends RebukeBase {
  constructor(game) {
    super(game, "Rebuke", "Innistrad", "ISD");
  }
}

module.exports = Rebuke;
