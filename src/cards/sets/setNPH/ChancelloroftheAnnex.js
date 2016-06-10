"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChancelloroftheAnnex extends UnimplementedCard {
  constructor (game) {
    super(game, "Chancellor of the Annex", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheAnnex;
