"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictoriousDestruction extends UnimplementedCard {
  constructor(game) {
    super(game, "Victorious Destruction", "New Phyrexia", "NPH");
  }
}

module.exports = VictoriousDestruction;
