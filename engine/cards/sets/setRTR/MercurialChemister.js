"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercurialChemister extends Card {
  constructor(game) {
    super(game, "Mercurial Chemister", "Return to Ravnica", "RTR");
  }
}

module.exports = MercurialChemister;
