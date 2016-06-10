"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mudslide extends UnimplementedCard {
  constructor (game) {
    super(game, "Mudslide", "Ice Age", "ICE");
  }
}

module.exports = Mudslide;
