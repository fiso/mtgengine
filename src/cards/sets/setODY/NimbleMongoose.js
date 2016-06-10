"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbleMongoose extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimble Mongoose", "Odyssey", "ODY");
  }
}

module.exports = NimbleMongoose;
