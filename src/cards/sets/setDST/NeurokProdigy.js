"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokProdigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Prodigy", "Darksteel", "DST");
  }
}

module.exports = NeurokProdigy;
