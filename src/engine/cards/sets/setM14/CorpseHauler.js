"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseHauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Hauler", "Magic 2014", "M14");
  }
}

module.exports = CorpseHauler;
