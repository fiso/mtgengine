"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lashknife extends UnimplementedCard {
  constructor (game) {
    super(game, "Lashknife", "Nemesis", "NMS");
  }
}

module.exports = Lashknife;
