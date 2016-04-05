"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortisDogs extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortis Dogs", "New Phyrexia", "NPH");
  }
}

module.exports = MortisDogs;
