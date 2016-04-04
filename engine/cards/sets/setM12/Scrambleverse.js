"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrambleverse extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrambleverse", "Magic 2012", "M12");
  }
}

module.exports = Scrambleverse;
