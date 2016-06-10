"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaliraMasterPolymorphist extends UnimplementedCard {
  constructor (game) {
    super(game, "Jalira, Master Polymorphist", "Magic 2015 Core Set", "M15");
  }
}

module.exports = JaliraMasterPolymorphist;
