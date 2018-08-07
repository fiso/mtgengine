"use strict";
const Constants = require ("../../../Constants");
const NimbleMongooseBase = require("../setEMA/NimbleMongoose");

class NimbleMongoose extends NimbleMongooseBase {
  constructor (game) {
    super(game, "Nimble Mongoose", "World Championship Decks 2002", "WC02");
  }
}

module.exports = NimbleMongoose;
