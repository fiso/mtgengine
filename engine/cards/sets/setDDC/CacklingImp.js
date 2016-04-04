"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CacklingImpBase = require("../setDD3_DVD/CacklingImp.js");

class CacklingImp extends CacklingImpBase {
  constructor(game) {
    super(game, "Cackling Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = CacklingImp;
