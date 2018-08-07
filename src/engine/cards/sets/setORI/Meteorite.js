"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meteorite extends UnimplementedCard {
  constructor (game) {
    super(game, "Meteorite", "Magic Origins", "ORI");
  }
}

module.exports = Meteorite;
