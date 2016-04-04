"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DauthiGhoul extends Card {
  constructor(game) {
    super(game, "Dauthi Ghoul", "Tempest", "TMP");
  }
}

module.exports = DauthiGhoul;
