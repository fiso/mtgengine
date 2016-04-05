"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillShot extends UnimplementedCard {
  constructor(game) {
    super(game, "Kill Shot", "Khans of Tarkir", "KTK");
  }
}

module.exports = KillShot;
