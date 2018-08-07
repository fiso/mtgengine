"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Distress extends UnimplementedCard {
  constructor (game) {
    super(game, "Distress", "Magic 2012", "M12");
  }
}

module.exports = Distress;
