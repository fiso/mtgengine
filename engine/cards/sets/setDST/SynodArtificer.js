"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SynodArtificer extends Card {
  constructor(game) {
    super(game, "Synod Artificer", "Darksteel", "DST");
  }
}

module.exports = SynodArtificer;
