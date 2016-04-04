"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidIllusionist extends Card {
  constructor(game) {
    super(game, "Cephalid Illusionist", "Torment", "TOR");
  }
}

module.exports = CephalidIllusionist;
