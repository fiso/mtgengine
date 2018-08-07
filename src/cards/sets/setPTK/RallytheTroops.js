"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallytheTroops extends UnimplementedCard {
  constructor (game) {
    super(game, "Rally the Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RallytheTroops;
