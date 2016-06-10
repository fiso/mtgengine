"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiptideDirector extends UnimplementedCard {
  constructor (game) {
    super(game, "Riptide Director", "Legions", "LGN");
  }
}

module.exports = RiptideDirector;
