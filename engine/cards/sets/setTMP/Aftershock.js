"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aftershock extends Card {
  constructor(game) {
    super(game, "Aftershock", "Tempest", "TMP");
  }
}

module.exports = Aftershock;
