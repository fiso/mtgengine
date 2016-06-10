"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercurialKite extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercurial Kite", "Scourge", "SCG");
  }
}

module.exports = MercurialKite;
