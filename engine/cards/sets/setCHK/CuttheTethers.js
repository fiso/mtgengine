"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuttheTethers extends UnimplementedCard {
  constructor(game) {
    super(game, "Cut the Tethers", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CuttheTethers;
