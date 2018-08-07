"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LanternSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Lantern Spirit", "Innistrad", "ISD");
  }
}

module.exports = LanternSpirit;
