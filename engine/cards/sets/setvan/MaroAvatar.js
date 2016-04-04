"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaroAvatar extends Card {
  constructor(game) {
    super(game, "Maro Avatar", "Vanguard", "VAN");
  }
}

module.exports = MaroAvatar;
