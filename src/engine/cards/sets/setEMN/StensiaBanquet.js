"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StensiaBanquet extends UnimplementedCard {
  constructor (game) {
    super(game, "Stensia Banquet", "Eldritch Moon", "EMN");
  }
}

module.exports = StensiaBanquet;
