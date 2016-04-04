"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Heliophial extends Card {
  constructor(game) {
    super(game, "Heliophial", "Fifth Dawn", "5DN");
  }
}

module.exports = Heliophial;
