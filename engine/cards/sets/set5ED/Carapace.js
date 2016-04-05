"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carapace extends UnimplementedCard {
  constructor(game) {
    super(game, "Carapace", "Fifth Edition", "5ED");
  }
}

module.exports = Carapace;
