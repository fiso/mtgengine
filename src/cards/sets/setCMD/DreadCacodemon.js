"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadCacodemon extends UnimplementedCard {
  constructor(game) {
    super(game, "Dread Cacodemon", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DreadCacodemon;
