"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirentheMoaningWell extends Card {
  constructor(game) {
    super(game, "Miren, the Moaning Well", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MirentheMoaningWell;
