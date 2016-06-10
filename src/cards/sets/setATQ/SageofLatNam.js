"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageofLatNam extends UnimplementedCard {
  constructor (game) {
    super(game, "Sage of Lat-Nam", "Antiquities", "ATQ");
  }
}

module.exports = SageofLatNam;
