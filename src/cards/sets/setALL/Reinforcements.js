"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reinforcements extends UnimplementedCard {
  constructor (game) {
    super(game, "Reinforcements", "Alliances", "ALL");
  }
}

module.exports = Reinforcements;
