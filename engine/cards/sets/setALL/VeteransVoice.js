"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteransVoice extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran's Voice", "Alliances", "ALL");
  }
}

module.exports = VeteransVoice;
