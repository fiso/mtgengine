"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deadshot extends Card {
  constructor(game) {
    super(game, "Deadshot", "Tempest", "TMP");
  }
}

module.exports = Deadshot;
