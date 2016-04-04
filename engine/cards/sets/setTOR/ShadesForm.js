"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShadesForm extends Card {
  constructor(game) {
    super(game, "Shade's Form", "Torment", "TOR");
  }
}

module.exports = ShadesForm;
