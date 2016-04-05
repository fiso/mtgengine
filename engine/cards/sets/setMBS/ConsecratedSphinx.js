"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsecratedSphinx extends UnimplementedCard {
  constructor(game) {
    super(game, "Consecrated Sphinx", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ConsecratedSphinx;
