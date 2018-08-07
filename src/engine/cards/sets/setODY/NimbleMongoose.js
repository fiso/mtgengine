"use strict";
const Constants = require ("../../../Constants");
const NimbleMongooseBase = require("../setEMA/NimbleMongoose");

class NimbleMongoose extends NimbleMongooseBase {
  constructor (game) {
    super(game, "Nimble Mongoose", "Odyssey", "ODY");
  }
}

module.exports = NimbleMongoose;
