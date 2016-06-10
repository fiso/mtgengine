"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercurialChemister extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercurial Chemister", "Return to Ravnica", "RTR");
  }
}

module.exports = MercurialChemister;
