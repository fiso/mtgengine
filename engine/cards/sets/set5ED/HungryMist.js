"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HungryMist extends Card {
  constructor(game) {
    super(game, "Hungry Mist", "Fifth Edition", "5ED");
  }
}

module.exports = HungryMist;
