"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foresight extends UnimplementedCard {
  constructor (game) {
    super(game, "Foresight", "Alliances", "ALL");
  }
}

module.exports = Foresight;
