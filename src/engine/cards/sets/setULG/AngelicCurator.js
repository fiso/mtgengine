"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicCurator extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Curator", "Urza's Legacy", "ULG");
  }
}

module.exports = AngelicCurator;
