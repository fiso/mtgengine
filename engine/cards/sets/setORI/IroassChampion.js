"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IroassChampion extends Card {
  constructor(game) {
    super(game, "Iroas's Champion", "Magic Origins", "ORI");
  }
}

module.exports = IroassChampion;
