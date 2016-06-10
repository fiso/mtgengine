"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvacynsCollar extends UnimplementedCard {
  constructor (game) {
    super(game, "Avacyn's Collar", "Dark Ascension", "DKA");
  }
}

module.exports = AvacynsCollar;
