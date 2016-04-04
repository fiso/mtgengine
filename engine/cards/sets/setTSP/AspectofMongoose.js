"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AspectofMongoose extends Card {
  constructor(game) {
    super(game, "Aspect of Mongoose", "Time Spiral", "TSP");
  }
}

module.exports = AspectofMongoose;
