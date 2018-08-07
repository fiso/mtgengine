"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PucasMischief extends UnimplementedCard {
  constructor (game) {
    super(game, "Puca's Mischief", "Shadowmoor", "SHM");
  }
}

module.exports = PucasMischief;
