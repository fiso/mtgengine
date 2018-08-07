"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AspectofMongoose extends UnimplementedCard {
  constructor (game) {
    super(game, "Aspect of Mongoose", "Time Spiral", "TSP");
  }
}

module.exports = AspectofMongoose;
