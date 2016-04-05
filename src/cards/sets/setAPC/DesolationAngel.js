"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesolationAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Desolation Angel", "Apocalypse", "APC");
  }
}

module.exports = DesolationAngel;
