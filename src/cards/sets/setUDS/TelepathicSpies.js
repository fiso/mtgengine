"use strict";
const Constants = require ("../../../Constants");
const TelepathicSpiesBase = require("../set7ED/TelepathicSpies");

class TelepathicSpies extends TelepathicSpiesBase {
  constructor (game) {
    super(game, "Telepathic Spies", "Urza's Destiny", "UDS");
  }
}

module.exports = TelepathicSpies;
