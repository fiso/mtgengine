"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Robo extends UnimplementedCard {
  constructor (game) {
    super(game, "Robo-", "Unstable", "UST");
  }
}

module.exports = Robo;
