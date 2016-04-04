"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroofBladehold extends Card {
  constructor(game) {
    super(game, "Hero of Bladehold", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HeroofBladehold;
