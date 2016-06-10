"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishSpiritGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Spirit Guide", "Alliances", "ALL");
  }
}

module.exports = ElvishSpiritGuide;
