"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TribalUnity extends UnimplementedCard {
  constructor (game) {
    super(game, "Tribal Unity", "Planechase", "HOP");
  }
}

module.exports = TribalUnity;
