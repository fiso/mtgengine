"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoShrine extends UnimplementedCard {
  constructor (game) {
    super(game, "Nantuko Shrine", "Odyssey", "ODY");
  }
}

module.exports = NantukoShrine;
