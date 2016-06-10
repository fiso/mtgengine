"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvengerenDal extends UnimplementedCard {
  constructor (game) {
    super(game, "Avenger en-Dal", "Nemesis", "NMS");
  }
}

module.exports = AvengerenDal;
