"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cromat extends UnimplementedCard {
  constructor(game) {
    super(game, "Cromat", "Apocalypse", "APC");
  }
}

module.exports = Cromat;
