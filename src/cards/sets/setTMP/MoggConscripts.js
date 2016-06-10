"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggConscripts extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Conscripts", "Tempest", "TMP");
  }
}

module.exports = MoggConscripts;
