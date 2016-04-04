"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcaneLaboratoryBase = require("../set7ED/ArcaneLaboratory.js");

class ArcaneLaboratory extends ArcaneLaboratoryBase {
  constructor(game) {
    super(game, "Arcane Laboratory", "Urza's Saga", "USG");
  }
}

module.exports = ArcaneLaboratory;
