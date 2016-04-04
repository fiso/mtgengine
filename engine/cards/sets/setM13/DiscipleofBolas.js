"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiscipleofBolasBase = require("../setC14/DiscipleofBolas.js");

class DiscipleofBolas extends DiscipleofBolasBase {
  constructor(game) {
    super(game, "Disciple of Bolas", "Magic 2013", "M13");
  }
}

module.exports = DiscipleofBolas;
