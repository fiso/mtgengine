"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasFactory extends Card {
  constructor(game) {
    super(game, "Urza's Factory", "Champs and States", "pCMP");
  }
}

module.exports = UrzasFactory;
