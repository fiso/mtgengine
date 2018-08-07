"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GangrenousZombies extends UnimplementedCard {
  constructor (game) {
    super(game, "Gangrenous Zombies", "Masters Edition II", "ME2");
  }
}

module.exports = GangrenousZombies;
