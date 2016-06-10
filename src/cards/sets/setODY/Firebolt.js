"use strict";
const Constants = require ("../../../Constants");
const FireboltBase = require("../setDD3_JVC/Firebolt");

class Firebolt extends FireboltBase {
  constructor (game) {
    super(game, "Firebolt", "Odyssey", "ODY");
  }
}

module.exports = Firebolt;
