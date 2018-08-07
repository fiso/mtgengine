"use strict";
const Constants = require ("../../../Constants");
const ManaplasmBase = require("../setCN2/Manaplasm");

class Manaplasm extends ManaplasmBase {
  constructor (game) {
    super(game, "Manaplasm", "Shards of Alara", "ALA");
  }
}

module.exports = Manaplasm;
