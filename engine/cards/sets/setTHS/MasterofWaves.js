"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofWaves extends UnimplementedCard {
  constructor(game) {
    super(game, "Master of Waves", "Theros", "THS");
  }
}

module.exports = MasterofWaves;
