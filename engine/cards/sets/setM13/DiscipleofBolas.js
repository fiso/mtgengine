"use strict";
const Constants = require ("../../../Constants");
const DiscipleofBolasBase = require("../setC14/DiscipleofBolas");

class DiscipleofBolas extends DiscipleofBolasBase {
  constructor(game) {
    super(game, "Disciple of Bolas", "Magic 2013", "M13");
  }
}

module.exports = DiscipleofBolas;
