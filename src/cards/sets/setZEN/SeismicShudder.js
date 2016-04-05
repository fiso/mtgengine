"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicShudder extends UnimplementedCard {
  constructor(game) {
    super(game, "Seismic Shudder", "Zendikar", "ZEN");
  }
}

module.exports = SeismicShudder;
