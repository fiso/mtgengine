"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JettingGlasskite extends UnimplementedCard {
  constructor (game) {
    super(game, "Jetting Glasskite", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = JettingGlasskite;
