"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuriokSalvagersBase = require("../set5DN/AuriokSalvagers.js");

class AuriokSalvagers extends AuriokSalvagersBase {
  constructor(game) {
    super(game, "Auriok Salvagers", "Modern Masters", "MMA");
  }
}

module.exports = AuriokSalvagers;
