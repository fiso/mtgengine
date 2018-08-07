"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercurialChemister extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercurial Chemister", "Commander 2017", "C17");
  }
}

module.exports = MercurialChemister;
