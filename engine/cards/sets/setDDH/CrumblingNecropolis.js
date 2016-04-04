"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrumblingNecropolisBase = require("../setC13/CrumblingNecropolis.js");

class CrumblingNecropolis extends CrumblingNecropolisBase {
  constructor(game) {
    super(game, "Crumbling Necropolis", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CrumblingNecropolis;
