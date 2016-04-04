"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbiddenLoreBase = require("../setICE/ForbiddenLore.js");

class ForbiddenLore extends ForbiddenLoreBase {
  constructor(game) {
    super(game, "Forbidden Lore", "Masters Edition II", "ME2");
  }
}

module.exports = ForbiddenLore;
