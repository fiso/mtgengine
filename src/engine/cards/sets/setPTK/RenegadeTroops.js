"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeTroops extends UnimplementedCard {
  constructor (game) {
    super(game, "Renegade Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RenegadeTroops;
