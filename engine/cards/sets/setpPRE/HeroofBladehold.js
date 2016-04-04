"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeroofBladeholdBase = require("../setMBS/HeroofBladehold.js");

class HeroofBladehold extends HeroofBladeholdBase {
  constructor(game) {
    super(game, "Hero of Bladehold", "Prerelease Events", "pPRE");
  }
}

module.exports = HeroofBladehold;
