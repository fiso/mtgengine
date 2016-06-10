"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntangibleVirtue extends UnimplementedCard {
  constructor (game) {
    super(game, "Intangible Virtue", "Innistrad", "ISD");
  }
}

module.exports = IntangibleVirtue;
