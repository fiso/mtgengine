"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiBanner extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeskai Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiBanner;
