"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArachnusWeb extends UnimplementedCard {
  constructor (game) {
    super(game, "Arachnus Web", "Magic 2012", "M12");
  }
}

module.exports = ArachnusWeb;
