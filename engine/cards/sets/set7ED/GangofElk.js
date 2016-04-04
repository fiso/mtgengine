"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GangofElk extends Card {
  constructor(game) {
    super(game, "Gang of Elk", "Seventh Edition", "7ED");
  }
}

module.exports = GangofElk;
