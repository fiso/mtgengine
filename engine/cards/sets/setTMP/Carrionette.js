"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carrionette extends Card {
  constructor(game) {
    super(game, "Carrionette", "Tempest", "TMP");
  }
}

module.exports = Carrionette;
