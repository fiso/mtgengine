"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaChieftain extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorilla Chieftain", "Alliances", "ALL");
  }
}

module.exports = GorillaChieftain;
