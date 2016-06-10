"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ichorid extends UnimplementedCard {
  constructor (game) {
    super(game, "Ichorid", "Torment", "TOR");
  }
}

module.exports = Ichorid;
