"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsionicBlast extends Card {
  constructor(game) {
    super(game, "Psionic Blast", "Collector's Edition", "CED");
  }
}

module.exports = PsionicBlast;
