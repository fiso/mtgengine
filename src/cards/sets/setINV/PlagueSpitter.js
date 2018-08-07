"use strict";
const Constants = require ("../../../Constants");
const PlagueSpitterBase = require("../setWC01/PlagueSpitter");

class PlagueSpitter extends PlagueSpitterBase {
  constructor (game) {
    super(game, "Plague Spitter", "Invasion", "INV");
  }
}

module.exports = PlagueSpitter;
