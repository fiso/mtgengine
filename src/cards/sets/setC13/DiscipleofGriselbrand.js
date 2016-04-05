"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofGriselbrand extends UnimplementedCard {
  constructor(game) {
    super(game, "Disciple of Griselbrand", "Commander 2013 Edition", "C13");
  }
}

module.exports = DiscipleofGriselbrand;
