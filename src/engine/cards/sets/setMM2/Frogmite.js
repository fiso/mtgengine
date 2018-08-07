"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Frogmite extends UnimplementedCard {
  constructor (game) {
    super(game, "Frogmite", "Modern Masters 2015", "MM2");
  }
}

module.exports = Frogmite;
