"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RebukingCeremony extends UnimplementedCard {
  constructor (game) {
    super(game, "Rebuking Ceremony", "Darksteel", "DST");
  }
}

module.exports = RebukingCeremony;
