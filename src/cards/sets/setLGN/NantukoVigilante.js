"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoVigilante extends UnimplementedCard {
  constructor (game) {
    super(game, "Nantuko Vigilante", "Legions", "LGN");
  }
}

module.exports = NantukoVigilante;
