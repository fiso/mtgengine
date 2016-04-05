"use strict";
const Constants = require ("../../../Constants");
const TyrantsChoiceBase = require("../setCNS/TyrantsChoice");

class TyrantsChoice extends TyrantsChoiceBase {
  constructor(game) {
    super(game, "Tyrant's Choice", "Vintage Masters", "VMA");
  }
}

module.exports = TyrantsChoice;
