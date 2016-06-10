"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shelter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shelter", "Odyssey", "ODY");
  }
}

module.exports = Shelter;
