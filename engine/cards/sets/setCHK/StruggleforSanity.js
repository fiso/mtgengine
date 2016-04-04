"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StruggleforSanity extends Card {
  constructor(game) {
    super(game, "Struggle for Sanity", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StruggleforSanity;
