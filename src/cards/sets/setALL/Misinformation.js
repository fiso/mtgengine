"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Misinformation extends UnimplementedCard {
  constructor (game) {
    super(game, "Misinformation", "Alliances", "ALL");
  }
}

module.exports = Misinformation;
