"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfestedRoothold extends UnimplementedCard {
  constructor(game) {
    super(game, "Infested Roothold", "Darksteel", "DST");
  }
}

module.exports = InfestedRoothold;
