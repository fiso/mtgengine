"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwornDefender extends UnimplementedCard {
  constructor (game) {
    super(game, "Sworn Defender", "Alliances", "ALL");
  }
}

module.exports = SwornDefender;
