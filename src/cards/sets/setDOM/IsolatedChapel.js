"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsolatedChapel extends UnimplementedCard {
  constructor (game) {
    super(game, "Isolated Chapel", "Dominaria", "DOM");
  }
}

module.exports = IsolatedChapel;
