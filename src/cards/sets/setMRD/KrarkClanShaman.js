"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrarkClanShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Krark-Clan Shaman", "Mirrodin", "MRD");
  }
}

module.exports = KrarkClanShaman;
