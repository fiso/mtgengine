"use strict";
const Constants = require ("../../../Constants");
const RushofAdrenalineBase = require("../setE02/RushofAdrenaline");

class RushofAdrenaline extends RushofAdrenalineBase {
  constructor (game) {
    super(game, "Rush of Adrenaline", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RushofAdrenaline;
