"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Opal Champion", "Urza's Legacy", "ULG");
  }
}

module.exports = OpalChampion;
