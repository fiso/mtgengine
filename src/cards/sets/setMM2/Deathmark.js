"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathmark extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathmark", "Modern Masters 2015", "MM2");
  }
}

module.exports = Deathmark;
