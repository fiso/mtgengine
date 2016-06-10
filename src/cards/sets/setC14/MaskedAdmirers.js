"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaskedAdmirers extends UnimplementedCard {
  constructor (game) {
    super(game, "Masked Admirers", "Commander 2014", "C14");
  }
}

module.exports = MaskedAdmirers;
