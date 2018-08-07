"use strict";
const Constants = require ("../../../Constants");
const FireboltBase = require("../setDDS/Firebolt");

class Firebolt extends FireboltBase {
  constructor (game) {
    super(game, "Firebolt", "Friday Night Magic 2007", "F07");
  }
}

module.exports = Firebolt;
