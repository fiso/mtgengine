"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RumorsofMyDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "\"Rumors of My Death . . .\"", "Unstable", "UST");
  }
}

module.exports = RumorsofMyDeath;
