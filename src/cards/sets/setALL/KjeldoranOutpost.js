"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranOutpost extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Outpost", "Alliances", "ALL");
  }
}

module.exports = KjeldoranOutpost;
