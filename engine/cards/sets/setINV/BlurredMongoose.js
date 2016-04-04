"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlurredMongoose extends Card {
  constructor(game) {
    super(game, "Blurred Mongoose", "Invasion", "INV");
  }
}

module.exports = BlurredMongoose;
