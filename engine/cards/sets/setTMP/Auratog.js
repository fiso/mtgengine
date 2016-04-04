"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Auratog extends Card {
  constructor(game) {
    super(game, "Auratog", "Tempest", "TMP");
  }
}

module.exports = Auratog;
