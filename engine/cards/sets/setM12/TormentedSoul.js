"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TormentedSoul extends Card {
  constructor(game) {
    super(game, "Tormented Soul", "Magic 2012", "M12");
  }
}

module.exports = TormentedSoul;
