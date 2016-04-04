"use strict";
const Constants = require ("../../../Constants");
const CrumblingNecropolisBase = require("../setC13/CrumblingNecropolis");

class CrumblingNecropolis extends CrumblingNecropolisBase {
  constructor(game) {
    super(game, "Crumbling Necropolis", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CrumblingNecropolis;
