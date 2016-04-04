"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WatercourserBase = require("../setM13/Watercourser.js");

class Watercourser extends WatercourserBase {
  constructor(game) {
    super(game, "Watercourser", "Magic Origins", "ORI");
  }
}

module.exports = Watercourser;
