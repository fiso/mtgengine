"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fogwalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Fogwalker", "Eldritch Moon", "EMN");
  }
}

module.exports = Fogwalker;
