"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisturbedBurial extends Card {
  constructor(game) {
    super(game, "Disturbed Burial", "Tempest", "TMP");
  }
}

module.exports = DisturbedBurial;
