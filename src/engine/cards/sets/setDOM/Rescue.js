"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rescue extends UnimplementedCard {
  constructor (game) {
    super(game, "Rescue", "Dominaria", "DOM");
  }
}

module.exports = Rescue;
