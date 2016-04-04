"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quagnoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Quagnoth", "Future Sight", "FUT");
  }
}

module.exports = Quagnoth;
