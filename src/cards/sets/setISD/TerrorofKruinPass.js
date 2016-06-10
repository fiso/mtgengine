"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerrorofKruinPass extends UnimplementedCard {
  constructor (game) {
    super(game, "Terror of Kruin Pass", "Innistrad", "ISD");
  }
}

module.exports = TerrorofKruinPass;
