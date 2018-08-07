"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofMystery extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple of Mystery", "Magic 2015 Clash Pack", "CP1");
  }
}

module.exports = TempleofMystery;
