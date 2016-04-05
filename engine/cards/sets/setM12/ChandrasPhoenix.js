"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasPhoenix extends UnimplementedCard {
  constructor(game) {
    super(game, "Chandra's Phoenix", "Magic 2012", "M12");
  }
}

module.exports = ChandrasPhoenix;
