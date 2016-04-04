"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownoftheAges extends Card {
  constructor(game) {
    super(game, "Crown of the Ages", "Fifth Edition", "5ED");
  }
}

module.exports = CrownoftheAges;
