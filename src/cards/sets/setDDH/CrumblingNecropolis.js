"use strict";
const Constants = require ("../../../Constants");
const CrumblingNecropolisBase = require("../setE02/CrumblingNecropolis");

class CrumblingNecropolis extends CrumblingNecropolisBase {
  constructor (game) {
    super(game, "Crumbling Necropolis", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CrumblingNecropolis;
