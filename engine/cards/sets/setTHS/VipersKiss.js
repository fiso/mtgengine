"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VipersKiss extends Card {
  constructor(game) {
    super(game, "Viper's Kiss", "Theros", "THS");
  }
}

module.exports = VipersKiss;
