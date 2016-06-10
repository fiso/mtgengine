"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecondThoughts extends UnimplementedCard {
  constructor (game) {
    super(game, "Second Thoughts", "Odyssey", "ODY");
  }
}

module.exports = SecondThoughts;
