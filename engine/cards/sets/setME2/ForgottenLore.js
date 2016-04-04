"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForgottenLoreBase = require("../setICE/ForgottenLore.js");

class ForgottenLore extends ForgottenLoreBase {
  constructor(game) {
    super(game, "Forgotten Lore", "Masters Edition II", "ME2");
  }
}

module.exports = ForgottenLore;
