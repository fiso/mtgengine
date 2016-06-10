"use strict";
const Constants = require ("../../../Constants");
const OraclesAttendantsBase = require("../set8ED/OraclesAttendants");

class OraclesAttendants extends OraclesAttendantsBase {
  constructor (game) {
    super(game, "Oracle's Attendants", "Nemesis", "NMS");
  }
}

module.exports = OraclesAttendants;
