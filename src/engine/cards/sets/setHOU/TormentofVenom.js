"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentofVenom extends UnimplementedCard {
  constructor (game) {
    super(game, "Torment of Venom", "Hour of Devastation", "HOU");
  }
}

module.exports = TormentofVenom;
