"use strict";
const Constants = require ("../../../Constants");
const OraclesAttendantsBase = require("../set9ED/OraclesAttendants");

class OraclesAttendants extends OraclesAttendantsBase {
  constructor (game) {
    super(game, "Oracle's Attendants", "Nemesis", "NEM");
  }
}

module.exports = OraclesAttendants;
