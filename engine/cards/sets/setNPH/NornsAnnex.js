"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NornsAnnex extends Card {
  constructor(game) {
    super(game, "Norn's Annex", "New Phyrexia", "NPH");
  }
}

module.exports = NornsAnnex;
