"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of Bolas", "Commander 2014", "C14");
  }
}

module.exports = DiscipleofBolas;
