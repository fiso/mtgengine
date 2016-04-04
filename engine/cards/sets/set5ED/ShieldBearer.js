"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldBearer extends Card {
  constructor(game) {
    super(game, "Shield Bearer", "Fifth Edition", "5ED");
  }
}

module.exports = ShieldBearer;
