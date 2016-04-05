"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoCalmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Nantuko Calmer", "Torment", "TOR");
  }
}

module.exports = NantukoCalmer;
