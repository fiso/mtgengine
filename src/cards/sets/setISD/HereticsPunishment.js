"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HereticsPunishment extends UnimplementedCard {
  constructor (game) {
    super(game, "Heretic's Punishment", "Innistrad", "ISD");
  }
}

module.exports = HereticsPunishment;
