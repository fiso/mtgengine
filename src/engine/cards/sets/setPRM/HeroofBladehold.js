"use strict";
const Constants = require ("../../../Constants");
const HeroofBladeholdBase = require("../setMBS/HeroofBladehold");

class HeroofBladehold extends HeroofBladeholdBase {
  constructor (game) {
    super(game, "Hero of Bladehold", "Magic Online Promos", "PRM");
  }
}

module.exports = HeroofBladehold;
