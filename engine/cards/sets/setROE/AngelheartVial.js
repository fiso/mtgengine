"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelheartVial extends Card {
  constructor(game) {
    super(game, "Angelheart Vial", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AngelheartVial;
