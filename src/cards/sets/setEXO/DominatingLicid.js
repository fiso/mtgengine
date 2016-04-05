"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DominatingLicid extends UnimplementedCard {
  constructor(game) {
    super(game, "Dominating Licid", "Exodus", "EXO");
  }
}

module.exports = DominatingLicid;
