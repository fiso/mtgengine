"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OraclesAttendantsBase = require("../set8ED/OraclesAttendants.js");

class OraclesAttendants extends OraclesAttendantsBase {
  constructor(game) {
    super(game, "Oracle's Attendants", "Ninth Edition", "9ED");
  }
}

module.exports = OraclesAttendants;
