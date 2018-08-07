"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaskedAdmirers extends UnimplementedCard {
  constructor (game) {
    super(game, "Masked Admirers", "Commander Anthology", "CMA");
  }
}

module.exports = MaskedAdmirers;
