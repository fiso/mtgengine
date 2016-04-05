"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaraboftheUnseen extends UnimplementedCard {
  constructor(game) {
    super(game, "Scarab of the Unseen", "Alliances", "ALL");
  }
}

module.exports = ScaraboftheUnseen;
