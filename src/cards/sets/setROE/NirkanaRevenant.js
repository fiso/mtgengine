"use strict";
const Constants = require ("../../../Constants");
const NirkanaRevenantBase = require("../setBBD/NirkanaRevenant");

class NirkanaRevenant extends NirkanaRevenantBase {
  constructor (game) {
    super(game, "Nirkana Revenant", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NirkanaRevenant;
