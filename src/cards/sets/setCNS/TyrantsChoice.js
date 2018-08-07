"use strict";
const Constants = require ("../../../Constants");
const TyrantsChoiceBase = require("../setVMA/TyrantsChoice");

class TyrantsChoice extends TyrantsChoiceBase {
  constructor (game) {
    super(game, "Tyrant's Choice", "Conspiracy", "CNS");
  }
}

module.exports = TyrantsChoice;
