"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyxbornWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Nyxborn Wolf", "Born of the Gods", "BNG");
  }
}

module.exports = NyxbornWolf;
