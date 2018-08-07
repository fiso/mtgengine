"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Peppersmoke extends UnimplementedCard {
  constructor (game) {
    super(game, "Peppersmoke", "Modern Masters", "MMA");
  }
}

module.exports = Peppersmoke;
