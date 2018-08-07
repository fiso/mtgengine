"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IroassChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Iroas's Champion", "Magic Origins", "ORI");
  }
}

module.exports = IroassChampion;
