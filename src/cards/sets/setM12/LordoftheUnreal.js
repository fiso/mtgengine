"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordoftheUnreal extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of the Unreal", "Magic 2012", "M12");
  }
}

module.exports = LordoftheUnreal;
