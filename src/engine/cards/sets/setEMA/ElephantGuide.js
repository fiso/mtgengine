"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Elephant Guide", "Eternal Masters", "EMA");
  }
}

module.exports = ElephantGuide;
