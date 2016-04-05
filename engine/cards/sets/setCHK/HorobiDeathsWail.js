"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorobiDeathsWail extends UnimplementedCard {
  constructor(game) {
    super(game, "Horobi, Death's Wail", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HorobiDeathsWail;
