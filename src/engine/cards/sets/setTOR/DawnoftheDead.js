"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnoftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawn of the Dead", "Torment", "TOR");
  }
}

module.exports = DawnoftheDead;
