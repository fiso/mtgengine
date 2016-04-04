"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnearthlyBlizzard extends Card {
  constructor(game) {
    super(game, "Unearthly Blizzard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UnearthlyBlizzard;
