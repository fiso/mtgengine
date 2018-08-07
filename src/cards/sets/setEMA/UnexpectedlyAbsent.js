"use strict";
const Constants = require ("../../../Constants");
const UnexpectedlyAbsentBase = require("../setCMA/UnexpectedlyAbsent");

class UnexpectedlyAbsent extends UnexpectedlyAbsentBase {
  constructor (game) {
    super(game, "Unexpectedly Absent", "Eternal Masters", "EMA");
  }
}

module.exports = UnexpectedlyAbsent;
