"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaggingThoughts extends UnimplementedCard {
  constructor (game) {
    super(game, "Nagging Thoughts", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NaggingThoughts;
