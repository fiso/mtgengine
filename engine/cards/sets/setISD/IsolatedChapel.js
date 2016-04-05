"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsolatedChapel extends UnimplementedCard {
  constructor(game) {
    super(game, "Isolated Chapel", "Innistrad", "ISD");
  }
}

module.exports = IsolatedChapel;
