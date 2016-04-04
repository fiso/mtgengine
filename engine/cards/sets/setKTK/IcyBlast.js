"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcyBlast extends Card {
  constructor(game) {
    super(game, "Icy Blast", "Khans of Tarkir", "KTK");
  }
}

module.exports = IcyBlast;
