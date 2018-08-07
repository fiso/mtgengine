"use strict";
const Constants = require ("../../../Constants");
const KamiofAncientLawBase = require("../setMM2/KamiofAncientLaw");

class KamiofAncientLaw extends KamiofAncientLawBase {
  constructor (game) {
    super(game, "Kami of Ancient Law", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofAncientLaw;
