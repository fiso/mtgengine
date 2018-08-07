"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anathemancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Anathemancer", "Friday Night Magic 2010", "F10");
  }
}

module.exports = Anathemancer;
