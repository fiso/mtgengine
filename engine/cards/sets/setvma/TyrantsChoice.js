"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TyrantsChoiceBase = require("../setCNS/TyrantsChoice.js");

class TyrantsChoice extends TyrantsChoiceBase {
  constructor(game) {
    super(game, "Tyrant's Choice", "Vintage Masters", "VMA");
  }
}

module.exports = TyrantsChoice;
