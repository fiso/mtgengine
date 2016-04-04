"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndbringersRevel extends Card {
  constructor(game) {
    super(game, "Endbringer's Revel", "Prophecy", "PCY");
  }
}

module.exports = EndbringersRevel;
