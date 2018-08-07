"use strict";
const Constants = require ("../../../Constants");
const CryptbreakerBase = require("../setEMN/Cryptbreaker");

class Cryptbreaker extends CryptbreakerBase {
  constructor (game) {
    super(game, "Cryptbreaker", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = Cryptbreaker;
