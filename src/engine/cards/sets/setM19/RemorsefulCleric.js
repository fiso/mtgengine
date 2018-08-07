"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemorsefulCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Remorseful Cleric", "Core Set 2019", "M19");
  }
}

module.exports = RemorsefulCleric;
