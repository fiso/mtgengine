"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Burnout extends UnimplementedCard {
  constructor(game) {
    super(game, "Burnout", "Alliances", "ALL");
  }
}

module.exports = Burnout;
