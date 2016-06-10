"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruMender extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Mender", "Legions", "LGN");
  }
}

module.exports = DaruMender;
