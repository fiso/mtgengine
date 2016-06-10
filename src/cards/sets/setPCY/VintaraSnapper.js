"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VintaraSnapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Vintara Snapper", "Prophecy", "PCY");
  }
}

module.exports = VintaraSnapper;
