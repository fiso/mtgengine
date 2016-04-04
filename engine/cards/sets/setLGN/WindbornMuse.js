"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindbornMuse extends UnimplementedCard {
  constructor(game) {
    super(game, "Windborn Muse", "Legions", "LGN");
  }
}

module.exports = WindbornMuse;
