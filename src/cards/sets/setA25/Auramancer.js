"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Auramancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Auramancer", "Masters 25", "A25");
  }
}

module.exports = Auramancer;
