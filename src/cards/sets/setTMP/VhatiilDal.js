"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VhatiilDal extends UnimplementedCard {
  constructor (game) {
    super(game, "Vhati il-Dal", "Tempest", "TMP");
  }
}

module.exports = VhatiilDal;
