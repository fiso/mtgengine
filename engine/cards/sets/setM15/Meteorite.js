"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meteorite extends UnimplementedCard {
  constructor(game) {
    super(game, "Meteorite", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Meteorite;
