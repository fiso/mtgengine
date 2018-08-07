"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofTresserhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord of Tresserhorn", "Masters Edition", "MED");
  }
}

module.exports = LordofTresserhorn;
