"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anoint extends Card {
  constructor(game) {
    super(game, "Anoint", "Tempest", "TMP");
  }
}

module.exports = Anoint;
