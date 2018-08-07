"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CastDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Cast Down", "Dominaria", "DOM");
  }
}

module.exports = CastDown;
