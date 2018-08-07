"use strict";
const Constants = require ("../../../Constants");
const UnexpectedlyAbsentBase = require("../setCMA/UnexpectedlyAbsent");

class UnexpectedlyAbsent extends UnexpectedlyAbsentBase {
  constructor (game) {
    super(game, "Unexpectedly Absent", "Commander 2013", "C13");
  }
}

module.exports = UnexpectedlyAbsent;
