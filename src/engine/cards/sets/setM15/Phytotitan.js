"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phytotitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Phytotitan", "Magic 2015", "M15");
  }
}

module.exports = Phytotitan;
