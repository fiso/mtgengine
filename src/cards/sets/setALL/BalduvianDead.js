"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Dead", "Alliances", "ALL");
  }
}

module.exports = BalduvianDead;
