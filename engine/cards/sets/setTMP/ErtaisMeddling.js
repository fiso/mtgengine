"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErtaisMeddling extends Card {
  constructor(game) {
    super(game, "Ertai's Meddling", "Tempest", "TMP");
  }
}

module.exports = ErtaisMeddling;
