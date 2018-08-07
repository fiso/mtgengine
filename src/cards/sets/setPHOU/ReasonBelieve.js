"use strict";
const Constants = require ("../../../Constants");
const ReasonBelieveBase = require("../setHOU/ReasonBelieve");

class ReasonBelieve extends ReasonBelieveBase {
  constructor (game) {
    super(game, "Reason // Believe", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = ReasonBelieve;
