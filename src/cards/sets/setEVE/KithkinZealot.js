"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinZealot extends UnimplementedCard {
  constructor (game) {
    super(game, "Kithkin Zealot", "Eventide", "EVE");
  }
}

module.exports = KithkinZealot;
