"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChandrasPhoenix extends Card {
  constructor(game) {
    super(game, "Chandra's Phoenix", "Magic 2012", "M12");
  }
}

module.exports = ChandrasPhoenix;
