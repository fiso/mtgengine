"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Complicate extends UnimplementedCard {
  constructor (game) {
    super(game, "Complicate", "Onslaught", "ONS");
  }
}

module.exports = Complicate;
