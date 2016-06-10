"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grapeshot extends UnimplementedCard {
  constructor (game) {
    super(game, "Grapeshot", "Modern Masters", "MMA");
  }
}

module.exports = Grapeshot;
