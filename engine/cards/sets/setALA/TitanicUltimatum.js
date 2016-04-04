"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TitanicUltimatumBase = require("../setDDH/TitanicUltimatum.js");

class TitanicUltimatum extends TitanicUltimatumBase {
  constructor(game) {
    super(game, "Titanic Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = TitanicUltimatum;
