"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrarkClanGrunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Krark-Clan Grunt", "Mirrodin", "MRD");
  }
}

module.exports = KrarkClanGrunt;
