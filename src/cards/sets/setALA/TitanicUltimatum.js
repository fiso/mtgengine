"use strict";
const Constants = require ("../../../Constants");
const TitanicUltimatumBase = require("../setDDH/TitanicUltimatum");

class TitanicUltimatum extends TitanicUltimatumBase {
  constructor (game) {
    super(game, "Titanic Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = TitanicUltimatum;
