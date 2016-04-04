"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranquilPath extends UnimplementedCard {
  constructor(game) {
    super(game, "Tranquil Path", "Apocalypse", "APC");
  }
}

module.exports = TranquilPath;
