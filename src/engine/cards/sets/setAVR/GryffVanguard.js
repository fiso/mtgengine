"use strict";
const Constants = require ("../../../Constants");
const GryffVanguardBase = require("../setDDQ/GryffVanguard");

class GryffVanguard extends GryffVanguardBase {
  constructor (game) {
    super(game, "Gryff Vanguard", "Avacyn Restored", "AVR");
  }
}

module.exports = GryffVanguard;
