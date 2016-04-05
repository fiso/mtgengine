"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlurredMongoose extends UnimplementedCard {
  constructor(game) {
    super(game, "Blurred Mongoose", "Invasion", "INV");
  }
}

module.exports = BlurredMongoose;
