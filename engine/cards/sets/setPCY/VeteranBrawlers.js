"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranBrawlers extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran Brawlers", "Prophecy", "PCY");
  }
}

module.exports = VeteranBrawlers;
