"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutInvocation extends UnimplementedCard {
  constructor (game) {
    super(game, "Devout Invocation", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DevoutInvocation;
