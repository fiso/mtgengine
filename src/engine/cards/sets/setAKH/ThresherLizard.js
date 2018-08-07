"use strict";
const Constants = require ("../../../Constants");
const ThresherLizardBase = require("../setA25/ThresherLizard");

class ThresherLizard extends ThresherLizardBase {
  constructor (game) {
    super(game, "Thresher Lizard", "Amonkhet", "AKH");
  }
}

module.exports = ThresherLizard;
