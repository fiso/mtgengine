"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excoriate extends UnimplementedCard {
  constructor (game) {
    super(game, "Excoriate", "Born of the Gods", "BNG");
  }
}

module.exports = Excoriate;
