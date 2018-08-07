"use strict";
const Constants = require ("../../../Constants");
const AuriokSalvagersBase = require("../setMMA/AuriokSalvagers");

class AuriokSalvagers extends AuriokSalvagersBase {
  constructor (game) {
    super(game, "Auriok Salvagers", "Fifth Dawn", "5DN");
  }
}

module.exports = AuriokSalvagers;
