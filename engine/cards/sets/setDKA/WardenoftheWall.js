"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WardenoftheWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Warden of the Wall", "Dark Ascension", "DKA");
  }
}

module.exports = WardenoftheWall;
