"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seek extends UnimplementedCard {
  constructor(game) {
    super(game, "Seek", "Dissension", "DIS");
  }
}

module.exports = Seek;
