"use strict";
const Constants = require ("../../../Constants");
const ImpetuousProtegeBase = require("../setPBBD/ImpetuousProtege");

class ImpetuousProtege extends ImpetuousProtegeBase {
  constructor (game) {
    super(game, "Impetuous Protege", "Battlebond", "BBD");
  }
}

module.exports = ImpetuousProtege;
