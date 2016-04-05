"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tamanoa extends UnimplementedCard {
  constructor(game) {
    super(game, "Tamanoa", "Coldsnap", "CSP");
  }
}

module.exports = Tamanoa;
