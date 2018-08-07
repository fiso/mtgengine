"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carapace extends UnimplementedCard {
  constructor (game) {
    super(game, "Carapace", "Masters Edition II", "ME2");
  }
}

module.exports = Carapace;
