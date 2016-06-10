"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Triskelion extends UnimplementedCard {
  constructor (game) {
    super(game, "Triskelion", "Antiquities", "ATQ");
  }
}

module.exports = Triskelion;
