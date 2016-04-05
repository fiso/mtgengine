"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireServant extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Servant", "Magic 2011", "M11");
  }
}

module.exports = FireServant;
