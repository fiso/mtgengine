"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsJester extends UnimplementedCard {
  constructor(game) {
    super(game, "Demon's Jester", "Dissension", "DIS");
  }
}

module.exports = DemonsJester;
