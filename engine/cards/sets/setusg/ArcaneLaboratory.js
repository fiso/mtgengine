"use strict";
const Constants = require ("../../../Constants");
const ArcaneLaboratoryBase = require("../set7ED/ArcaneLaboratory");

class ArcaneLaboratory extends ArcaneLaboratoryBase {
  constructor(game) {
    super(game, "Arcane Laboratory", "Urza's Saga", "USG");
  }
}

module.exports = ArcaneLaboratory;
