"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NornsAnnex extends UnimplementedCard {
  constructor (game) {
    super(game, "Norn's Annex", "New Phyrexia", "NPH");
  }
}

module.exports = NornsAnnex;
