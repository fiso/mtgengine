"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingCrocodile extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Crocodile", "Magic 2012", "M12");
  }
}

module.exports = LurkingCrocodile;
