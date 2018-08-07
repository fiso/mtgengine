"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cancel extends UnimplementedCard {
  constructor (game) {
    super(game, "Cancel", "Core Set 2019", "M19");
  }
}

module.exports = Cancel;
