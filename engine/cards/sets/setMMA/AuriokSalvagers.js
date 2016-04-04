"use strict";
const Constants = require ("../../../Constants");
const AuriokSalvagersBase = require("../set5DN/AuriokSalvagers");

class AuriokSalvagers extends AuriokSalvagersBase {
  constructor(game) {
    super(game, "Auriok Salvagers", "Modern Masters", "MMA");
  }
}

module.exports = AuriokSalvagers;
