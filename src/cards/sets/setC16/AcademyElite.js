"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Elite", "Commander 2016", "C16");
  }
}

module.exports = AcademyElite;
