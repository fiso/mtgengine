"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KinTreeWarden extends Card {
  constructor(game) {
    super(game, "Kin-Tree Warden", "Khans of Tarkir", "KTK");
  }
}

module.exports = KinTreeWarden;
