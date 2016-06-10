"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadcapSkills extends UnimplementedCard {
  constructor (game) {
    super(game, "Madcap Skills", "Gatecrash", "GTC");
  }
}

module.exports = MadcapSkills;
