"use strict";
const Constants = require ("../../../Constants");
const DefiantBloodlordBase = require("../setBFZ/DefiantBloodlord");

class DefiantBloodlord extends DefiantBloodlordBase {
  constructor (game) {
    super(game, "Defiant Bloodlord", "Magic Online Promos", "PRM");
  }
}

module.exports = DefiantBloodlord;
