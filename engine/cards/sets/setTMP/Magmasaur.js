"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Magmasaur extends Card {
  constructor(game) {
    super(game, "Magmasaur", "Tempest", "TMP");
  }
}

module.exports = Magmasaur;
