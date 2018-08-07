"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbleMongoose extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimble Mongoose", "Eternal Masters", "EMA");
  }
}

module.exports = NimbleMongoose;
