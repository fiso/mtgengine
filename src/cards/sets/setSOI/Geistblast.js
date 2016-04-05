"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Geistblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Geistblast", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Geistblast;
