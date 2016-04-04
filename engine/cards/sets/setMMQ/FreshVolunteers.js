"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreshVolunteers extends Card {
  constructor(game) {
    super(game, "Fresh Volunteers", "Mercadian Masques", "MMQ");
  }
}

module.exports = FreshVolunteers;
