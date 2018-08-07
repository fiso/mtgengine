"use strict";
const Constants = require ("../../../Constants");
const SifterofSkullsBase = require("../setOGW/SifterofSkulls");

class SifterofSkulls extends SifterofSkullsBase {
  constructor (game) {
    super(game, "Sifter of Skulls", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = SifterofSkulls;
