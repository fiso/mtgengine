"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImperiousPerfect extends Card {
  constructor(game) {
    super(game, "Imperious Perfect", "Champs and States", "pCMP");
  }
}

module.exports = ImperiousPerfect;
