"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorGolem extends Card {
  constructor(game) {
    super(game, "Razor Golem", "Darksteel", "DST");
  }
}

module.exports = RazorGolem;
