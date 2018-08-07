"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Horror", "Eldritch Moon Tokens", "TEMN");
  }
}

module.exports = EldraziHorror;
