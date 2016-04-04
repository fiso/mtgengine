"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KhabálGhoulBase = require("../setARN/KhabálGhoul.js");

class KhabálGhoul extends KhabálGhoulBase {
  constructor(game) {
    super(game, "Khabál Ghoul", "Masters Edition", "MED");
  }
}

module.exports = KhabálGhoul;
