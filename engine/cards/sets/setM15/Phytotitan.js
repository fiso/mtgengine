"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phytotitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Phytotitan", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Phytotitan;
