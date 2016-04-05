"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadServant extends UnimplementedCard {
  constructor(game) {
    super(game, "Undead Servant", "Magic Origins", "ORI");
  }
}

module.exports = UndeadServant;
