"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenDoomsayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Thraben Doomsayer", "Dark Ascension", "DKA");
  }
}

module.exports = ThrabenDoomsayer;
