"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CartographerBase = require("../setEXO/Cartographer.js");

class Cartographer extends CartographerBase {
  constructor(game) {
    super(game, "Cartographer", "Odyssey", "ODY");
  }
}

module.exports = Cartographer;
