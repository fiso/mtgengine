"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plummet extends UnimplementedCard {
  constructor (game) {
    super(game, "Plummet", "Core Set 2019", "M19");
  }
}

module.exports = Plummet;
