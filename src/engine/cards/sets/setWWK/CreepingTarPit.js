"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepingTarPit extends UnimplementedCard {
  constructor (game) {
    super(game, "Creeping Tar Pit", "Worldwake", "WWK");
  }
}

module.exports = CreepingTarPit;
