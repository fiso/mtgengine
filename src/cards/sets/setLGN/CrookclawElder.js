"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrookclawElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Crookclaw Elder", "Legions", "LGN");
  }
}

module.exports = CrookclawElder;
