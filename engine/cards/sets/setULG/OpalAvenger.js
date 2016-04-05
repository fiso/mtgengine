"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Opal Avenger", "Urza's Legacy", "ULG");
  }
}

module.exports = OpalAvenger;
