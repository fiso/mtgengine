"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AboutFace extends UnimplementedCard {
  constructor (game) {
    super(game, "About Face", "Urza's Legacy", "ULG");
  }
}

module.exports = AboutFace;
