"use strict";
const Constants = require ("../../../Constants");
const FireboltBase = require("../setDDS/Firebolt");

class Firebolt extends FireboltBase {
  constructor (game) {
    super(game, "Firebolt", "Magic Online Promos", "PRM");
  }
}

module.exports = Firebolt;
