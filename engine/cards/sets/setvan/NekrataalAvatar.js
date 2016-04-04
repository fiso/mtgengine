"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NekrataalAvatar extends Card {
  constructor(game) {
    super(game, "Nekrataal Avatar", "Vanguard", "VAN");
  }
}

module.exports = NekrataalAvatar;
