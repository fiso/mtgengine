"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeskai Elder", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiElder;
