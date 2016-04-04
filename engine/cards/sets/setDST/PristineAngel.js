"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PristineAngel extends Card {
  constructor(game) {
    super(game, "Pristine Angel", "Darksteel", "DST");
  }
}

module.exports = PristineAngel;
