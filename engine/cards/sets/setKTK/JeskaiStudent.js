"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiStudent extends UnimplementedCard {
  constructor(game) {
    super(game, "Jeskai Student", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiStudent;
