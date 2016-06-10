"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduWarshrieker extends UnimplementedCard {
  constructor (game) {
    super(game, "Mardu Warshrieker", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduWarshrieker;
