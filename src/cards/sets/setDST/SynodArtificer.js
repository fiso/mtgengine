"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SynodArtificer extends UnimplementedCard {
  constructor (game) {
    super(game, "Synod Artificer", "Darksteel", "DST");
  }
}

module.exports = SynodArtificer;
