"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NyleasDisciple extends Card {
  constructor(game) {
    super(game, "Nylea's Disciple", "Theros", "THS");
  }
}

module.exports = NyleasDisciple;
