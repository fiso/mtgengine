"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AugurofSkulls extends UnimplementedCard {
  constructor (game) {
    super(game, "Augur of Skulls", "Future Sight", "FUT");
  }
}

module.exports = AugurofSkulls;
