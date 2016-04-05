"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoragaInvocation extends UnimplementedCard {
  constructor(game) {
    super(game, "Joraga Invocation", "Magic Origins", "ORI");
  }
}

module.exports = JoragaInvocation;
