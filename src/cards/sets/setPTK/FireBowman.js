"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireBowman extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Bowman", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FireBowman;
