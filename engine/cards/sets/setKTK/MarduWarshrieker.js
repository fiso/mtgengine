"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduWarshrieker extends Card {
  constructor(game) {
    super(game, "Mardu Warshrieker", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduWarshrieker;
