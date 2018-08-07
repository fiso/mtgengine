"use strict";
const Constants = require ("../../../Constants");
const CalltotheGraveBase = require("../setM12/CalltotheGrave");

class CalltotheGrave extends CalltotheGraveBase {
  constructor (game) {
    super(game, "Call to the Grave", "Scourge", "SCG");
  }
}

module.exports = CalltotheGrave;
