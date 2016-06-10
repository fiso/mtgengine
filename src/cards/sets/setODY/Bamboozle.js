"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bamboozle extends UnimplementedCard {
  constructor (game) {
    super(game, "Bamboozle", "Odyssey", "ODY");
  }
}

module.exports = Bamboozle;
