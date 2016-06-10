"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroofBladehold extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero of Bladehold", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HeroofBladehold;
