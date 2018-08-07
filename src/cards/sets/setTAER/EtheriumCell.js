"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtheriumCell extends UnimplementedCard {
  constructor (game) {
    super(game, "Etherium Cell", "Aether Revolt Tokens", "TAER");
  }
}

module.exports = EtheriumCell;
