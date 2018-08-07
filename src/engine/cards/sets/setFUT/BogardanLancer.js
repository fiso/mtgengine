"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogardanLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Bogardan Lancer", "Future Sight", "FUT");
  }
}

module.exports = BogardanLancer;
