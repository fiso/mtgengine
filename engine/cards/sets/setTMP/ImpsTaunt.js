"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImpsTaunt extends Card {
  constructor(game) {
    super(game, "Imps' Taunt", "Tempest", "TMP");
  }
}

module.exports = ImpsTaunt;
