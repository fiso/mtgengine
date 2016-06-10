"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerohsFaithful extends UnimplementedCard {
  constructor (game) {
    super(game, "Teroh's Faithful", "Torment", "TOR");
  }
}

module.exports = TerohsFaithful;
