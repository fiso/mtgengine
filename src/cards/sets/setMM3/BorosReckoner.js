"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosReckoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Reckoner", "Modern Masters 2017", "MM3");
  }
}

module.exports = BorosReckoner;
