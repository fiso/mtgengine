"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnollspineInvocation extends UnimplementedCard {
  constructor(game) {
    super(game, "Knollspine Invocation", "Shadowmoor", "SHM");
  }
}

module.exports = KnollspineInvocation;
