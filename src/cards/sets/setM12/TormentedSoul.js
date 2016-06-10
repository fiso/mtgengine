"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentedSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Tormented Soul", "Magic 2012", "M12");
  }
}

module.exports = TormentedSoul;
