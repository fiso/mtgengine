"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BodyofJukai extends UnimplementedCard {
  constructor(game) {
    super(game, "Body of Jukai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BodyofJukai;
