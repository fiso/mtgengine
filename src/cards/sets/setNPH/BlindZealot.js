"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindZealot extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Zealot", "New Phyrexia", "NPH");
  }
}

module.exports = BlindZealot;
