"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Worldslayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Worldslayer", "Magic 2012", "M12");
  }
}

module.exports = Worldslayer;
