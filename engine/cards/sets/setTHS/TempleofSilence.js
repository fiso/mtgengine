"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofSilence extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple of Silence", "Theros", "THS");
  }
}

module.exports = TempleofSilence;
