"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViolentEruption extends UnimplementedCard {
  constructor(game) {
    super(game, "Violent Eruption", "Torment", "TOR");
  }
}

module.exports = ViolentEruption;
