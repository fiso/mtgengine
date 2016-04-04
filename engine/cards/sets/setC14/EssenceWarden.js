"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceWarden extends Card {
  constructor(game) {
    super(game, "Essence Warden", "Commander 2014", "C14");
  }
}

module.exports = EssenceWarden;
