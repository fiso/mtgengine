"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimbleMongoose extends Card {
  constructor(game) {
    super(game, "Nimble Mongoose", "Odyssey", "ODY");
  }
}

module.exports = NimbleMongoose;
