"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockyTarPit extends UnimplementedCard {
  constructor (game) {
    super(game, "Rocky Tar Pit", "Commander 2018", "C18");
  }
}

module.exports = RockyTarPit;
