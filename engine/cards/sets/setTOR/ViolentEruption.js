"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViolentEruption extends Card {
  constructor(game) {
    super(game, "Violent Eruption", "Torment", "TOR");
  }
}

module.exports = ViolentEruption;
