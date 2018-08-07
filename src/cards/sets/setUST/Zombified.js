"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zombified extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombified", "Unstable", "UST");
  }
}

module.exports = Zombified;
