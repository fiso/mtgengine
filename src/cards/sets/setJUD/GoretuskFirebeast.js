"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoretuskFirebeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Goretusk Firebeast", "Judgment", "JUD");
  }
}

module.exports = GoretuskFirebeast;
