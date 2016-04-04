"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvisibleStalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Invisible Stalker", "Innistrad", "ISD");
  }
}

module.exports = InvisibleStalker;
