"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LakeoftheDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Lake of the Dead", "Alliances", "ALL");
  }
}

module.exports = LakeoftheDead;
