"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChancelloroftheAnnex extends Card {
  constructor(game) {
    super(game, "Chancellor of the Annex", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheAnnex;
