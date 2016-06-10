"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisRealm extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Realm", "Visions", "VIS");
  }
}

module.exports = TeferisRealm;
