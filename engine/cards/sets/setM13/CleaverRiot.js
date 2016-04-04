"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CleaverRiot extends Card {
  constructor(game) {
    super(game, "Cleaver Riot", "Magic 2013", "M13");
  }
}

module.exports = CleaverRiot;
