"use strict";
const Constants = require ("../../../Constants");
const SanctumofUginBase = require("../setBFZ/SanctumofUgin");

class SanctumofUgin extends SanctumofUginBase {
  constructor (game) {
    super(game, "Sanctum of Ugin", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = SanctumofUgin;
