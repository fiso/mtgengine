"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchesEye extends UnimplementedCard {
  constructor(game) {
    super(game, "Witches' Eye", "Theros", "THS");
  }
}

module.exports = WitchesEye;
