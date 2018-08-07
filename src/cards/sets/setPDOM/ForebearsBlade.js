"use strict";
const Constants = require ("../../../Constants");
const ForebearsBladeBase = require("../setDOM/ForebearsBlade");

class ForebearsBlade extends ForebearsBladeBase {
  constructor (game) {
    super(game, "Forebear's Blade", "Dominaria Promos", "PDOM");
  }
}

module.exports = ForebearsBlade;
