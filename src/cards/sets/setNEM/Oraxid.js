"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oraxid extends UnimplementedCard {
  constructor (game) {
    super(game, "Oraxid", "Nemesis", "NEM");
  }
}

module.exports = Oraxid;
