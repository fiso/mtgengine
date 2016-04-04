"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleofBolas extends Card {
  constructor(game) {
    super(game, "Disciple of Bolas", "Commander 2014", "C14");
  }
}

module.exports = DiscipleofBolas;
