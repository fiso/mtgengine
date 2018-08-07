"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshFlats extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Flats", "Modern Masters 2017", "MM3");
  }
}

module.exports = MarshFlats;
