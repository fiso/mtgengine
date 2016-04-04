"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duneblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Duneblast", "Khans of Tarkir", "KTK");
  }
}

module.exports = Duneblast;
