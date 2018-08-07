"use strict";
const Constants = require ("../../../Constants");
const PyrokinesisBase = require("../setEMA/Pyrokinesis");

class Pyrokinesis extends PyrokinesisBase {
  constructor (game) {
    super(game, "Pyrokinesis", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Pyrokinesis;
