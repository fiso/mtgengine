"use strict";
const Constants = require ("../../../Constants");
const HeroofBladeholdBase = require("../setMBS/HeroofBladehold");

class HeroofBladehold extends HeroofBladeholdBase {
  constructor (game) {
    super(game, "Hero of Bladehold", "Prerelease Events", "pPRE");
  }
}

module.exports = HeroofBladehold;
