"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NezumiCutthroat extends UnimplementedCard {
  constructor (game) {
    super(game, "Nezumi Cutthroat", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiCutthroat;
